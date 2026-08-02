from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ProjectFilter
from rest_framework.filters import OrderingFilter, SearchFilter

from .models import Project
from .serializers import (
    ProjectDetailSerializer,
    ProjectListSerializer
)


class ProjectListAPIView(generics.ListAPIView):
    serializer_class = ProjectListSerializer
    
    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]
    
    filterset_class = ProjectFilter
    
    search_fields = [
        "title",
        "short_description",
        "full_description",
    ]
    
    ordering_fields = [
        "title",
        "display_order",
    ]
    
    ordering = [
        "display_order",
        "title"
    ]
     
    def get_queryset(self):
        return (
            Project.objects.filter(is_active = True)
            .prefetch_related("technologies")
        )
        
        
        
class ProjectDetailsAPIView(generics.RetrieveAPIView):
    serializer_class = ProjectDetailSerializer
    lookup_field = "slug"
    
    def get_queryset(self):
        return (
            Project.objects.filter(is_active=True)
            .prefetch_related(
                "technologies",
                "images"
            )
        )