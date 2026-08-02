from rest_framework import generics

from .models import Technology
from .serializers import PublicTechnologySerializer


class TechnologyListAPIView(generics.ListAPIView):
    serializer_class = PublicTechnologySerializer
    
    
    queryset = Technology.objects.filter(
        is_active = True
    ).order_by(
        "display_order",
        "name",
    )