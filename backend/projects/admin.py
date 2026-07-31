from django.contrib import admin

from .models import Project, ProjectImage


class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1
    
    
    
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "status",
        "featured",
        "is_active",
        "display_order"
    )
    
    list_filter = (
        "status",
        "featured",
        "is_active"
    )
    
    search_fields = (
        "title",
        "short_description",
        "full_description"
    )
    
    prepopulated_fields = {
        "slug" : ("title",)
    }
    
    ordering = (
        "display_order",
        "title"
    )
    
    inlines = [ProjectImageInline]
    

@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    
    list_display = (
        "project",
        "caption",
        "display_order",
        "created_at"
    )
    
    list_filter = (
        "project",
    )
    
    search_fields = (
        "project__title",
        "caption"
    )
    
    ordering = (
        "project",
        "display_order"
    )
    
    