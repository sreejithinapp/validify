from django.conf.urls import url
from django.contrib.auth import views, urls

from rest_auth.views import (
    LogoutView, UserDetailsView, PasswordChangeView,
    PasswordResetView, PasswordResetConfirmView
)

from views import AccountLoginView

urlpatterns = [
    url(r'^login/$', AccountLoginView.as_view(), name='account_login'),
    url(r'^logout/$', LogoutView.as_view(), name='rest_logout'),
    url(r'^password/reset/$', PasswordResetView.as_view(), name='rest_password_reset'),
    url(r'^password/reset/confirm/$', PasswordResetConfirmView.as_view(), name='rest_password_reset_confirm'),
    url(r'^password/change/$', PasswordChangeView.as_view(), name='rest_password_change'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
]