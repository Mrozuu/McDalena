from rest_framework import routers
from .api import SetViewSet

router = routers.DefaultRouter()
router.register('api/sets', SetViewSet, 'sets')

urlpatterns = router.urls