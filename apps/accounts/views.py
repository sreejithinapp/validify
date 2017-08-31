# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_auth.views import LoginView

from .serializers import LoginSerializer


class AccountLoginView(LoginView):
    """
    Account user login view
    """
    serializer_class = LoginSerializer
