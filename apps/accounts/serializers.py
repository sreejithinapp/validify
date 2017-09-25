import os
import json
from django.contrib.auth import get_user_model, authenticate
from django.conf import settings
from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers, exceptions
from rest_auth.models import TokenModel

UserModel = get_user_model()


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=False, allow_blank=True)
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'})

    def _validate_email(self, email, password):
        user = None

        if email and password:
            user = authenticate(email=email, password=password)
        else:
            msg = _('Must include "email" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def _validate_username(self, username, password):
        user = None

        if username and password:
            user = authenticate(username=username, password=password)
        else:
            msg = _('Must include "username" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def _validate_username_email(self, username, email, password):
        user = None

        if email and password:
            user = authenticate(email=email, password=password)
        elif username and password:
            user = authenticate(username=username, password=password)
        else:
            msg = _('Must include either "username" or "email" and "password".')
            raise exceptions.ValidationError(msg)

        return user

    def validate(self, attrs):

        username = attrs.get('username')
        email = attrs.get('email')
        password = attrs.get('password')

        user = None

        if 'allauth' in settings.INSTALLED_APPS:
            from allauth.account import app_settings

            # Authentication through email
            if app_settings.AUTHENTICATION_METHOD == app_settings.AuthenticationMethod.EMAIL:
                user = self._validate_email(email, password)

            # Authentication through username
            if app_settings.AUTHENTICATION_METHOD == app_settings.AuthenticationMethod.USERNAME:
                user = self._validate_username(username, password)

            # Authentication through either username or email
            else:
                user = self._validate_username_email(username, email, password)

        else:
            # Authentication without using allauth
            if email:
                try:
                    username = UserModel.objects.get(email__iexact=email).get_username()
                except UserModel.DoesNotExist:
                    pass

            if username:
                user = self._validate_username_email(username, '', password)

        # Did we get back an active user?
        if user:
            if not user.is_active:
                msg = _('User account is disabled.')
                raise exceptions.ValidationError(msg)
        else:
            msg = _('Unable to log in with provided credentials.')
            raise exceptions.ValidationError(msg)

        # If required, is the email verified?
        if 'rest_auth.registration' in settings.INSTALLED_APPS:
            from allauth.account import app_settings
            if app_settings.EMAIL_VERIFICATION == app_settings.EmailVerificationMethod.MANDATORY:
                email_address = user.emailaddress_set.get(email=user.email)
                if not email_address.verified:
                    raise serializers.ValidationError(_('E-mail is not verified.'))

        attrs['user'] = user
        return attrs


class UserDetailsSerializer(serializers.ModelSerializer):
    """
    User model w/o password
    """
    auth_token = serializers.SerializerMethodField()
    user_role = serializers.SerializerMethodField()
    dashboard = serializers.SerializerMethodField()

    class Meta:
        model = UserModel
        fields = ('id', 'auth_token', 'username', 'email', 'first_name', 'last_name', 'is_active',
                  'date_joined', 'dashboard', 'user_role')
        read_only_fields = ('email', 'auth_token', 'is_active', 'date_joined', 'dashboard', 'user_role')

    def get_auth_token(self, user):
        """
        Get auth token
        :param user:
        :return:
        """
        token = TokenModel.objects.get(user=user)
        auth_token = token.key
        return auth_token

    def get_user_role(self, user):
        """
        Get auth token
        :param user:
        :return:
        """
        group = user.groups.all().first()
        return group.name

    def get_dashboard(self, user):
        """

        :param user:
        :return:
        """
        data = {}
        if self.is_member(user, "group1"):
            json_data = open(os.path.abspath(os.path.join(os.path.dirname(__file__),
                                                          '../../samples/dashboard/surety.json'))).read()
            data = json.loads(json_data)
        elif self.is_member(user, "group2"):
            json_data = open(os.path.abspath(os.path.join(os.path.dirname(__file__),
                                                          '../../samples/dashboard/doi.json'))).read()
            data = json.loads(json_data)
        return data

    def is_member(self, user, group_name):
        return user.groups.filter(name=group_name).exists()
