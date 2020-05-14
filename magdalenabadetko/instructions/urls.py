from rest_framework import routers
from .api import InstructionViewSet

router = routers.DefaultRouter()
router.register('api/instructions', InstructionViewSet, 'instructions')

urlpatterns = router.urls