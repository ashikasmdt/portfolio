from django.urls import path

from .views import(
    ProjectDetailsAPIView,
    ProjectListAPIView,
    
)

app_name = "projects"

urlpatterns = [
    path("", ProjectListAPIView.as_view(), name = "project-list",),
    path("<slug:slug>/", ProjectDetailsAPIView.as_view(), name = "project-detail",),
]
