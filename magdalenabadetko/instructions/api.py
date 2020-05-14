from instructions.models import Instruction
from rest_framework import viewsets, permissions
from .serializers import InstructionSerializer

# Lead Viewset
class InstructionViewSet(viewsets.ModelViewSet):
    queryset = Instruction.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InstructionSerializer