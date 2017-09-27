from rest_framework.routers import DefaultRouter
from .views import BondSearchViewSet

router = DefaultRouter()

router.register(r'search', BondSearchViewSet, base_name='search-list')
urlpatterns = router.urls
