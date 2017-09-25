# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

from rest_auth.views import LoginView
from rest_auth.serializers import JWTSerializer, UserDetailsSerializer

from .serializers import LoginSerializer, UserDetailsSerializer


@permission_classes((AllowAny,))
class AccountLoginView(LoginView):
    """
    Account user login view
    """
    serializer_class = LoginSerializer

    def get_response_serializer(self):
        if getattr(settings, 'REST_USE_JWT', False):
            response_serializer = JWTSerializer
        else:
            response_serializer = UserDetailsSerializer
        return response_serializer

    def get_response(self):
        serializer_class = self.get_response_serializer()
        serializer = serializer_class(instance=self.user, context={'request': self.request})
        return Response(serializer.data, status=status.HTTP_200_OK)
