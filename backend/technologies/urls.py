from django.urls import path

from .views import TechnologyListAPIView

urlpatterns = [
    path("", TechnologyListAPIView.as_view(), name="technology-list")
]
