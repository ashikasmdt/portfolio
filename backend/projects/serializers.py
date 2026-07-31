from rest_framework import serializers

from .models import ProjectImage, Project
from technologies.serializers import PublicTechnologySerializer

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = (
            "image", 
            "caption",
        )

class ProjectListSerializer(serializers.ModelSerializer):
    technologies = PublicTechnologySerializer(
        many = True,
        read_only = True
    )
    
    class Meta:
        model = Project
        fields = (
            "title",
            "slug",
            "short_description",
            "thumbnail",
            "technologies"
        )
        

class ProjectDetailSerializer(serializers.ModelSerializer):
    technologies = PublicTechnologySerializer(
        many = True,
        read_only = True,
    )
    
    images = ProjectImageSerializer(
        many = True,
        read_only = True,
    )
    
    class Meta:
        model = Project
        fields = (
            "title",
            "slug",
            "short_description",
            "full_description",
            "thumbnail",
            "github_url",
            "live_demo_url",
            "technologies",
            "images",
        )