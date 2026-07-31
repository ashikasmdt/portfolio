from django.urls import path

from .views import(
    ProjectDetailsAPIView,
    ProjectListView,
    
)

app_name = "projects"

urlpatterns = [
    path("", ProjectListView.as_view(), name = "project-list",),
    path("<slug:slug>/", ProjectDetailsAPIView.as_view(), name = "project-detail",),
]
