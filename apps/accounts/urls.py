from django.conf.urls import url
from rest_auth.urls import urlpatterns as rest_auth_urlpatterns

from views import AccountLoginView

urlpatterns = [
    url(r'^login/$', AccountLoginView.as_view(), name='account_login'),
]