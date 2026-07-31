from rest_framework import serializers

from .models import Technology



class PublicTechnologySerializer(serializers.ModelSerializer):
    category = serializers.CharField(source = "get_category_display")
    
    
    class Meta:
        model = Technology
        fields = (
            "name",
            "slug",
            "category",
            "icon",
            "website",
        )