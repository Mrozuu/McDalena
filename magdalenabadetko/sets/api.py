from sets.models import Set
from rest_framework import viewsets, permissions
from .serializers import SetSerializer

# Lead Viewset
class SetViewSet(viewsets.ModelViewSet):
    queryset = Set.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SetSerializer