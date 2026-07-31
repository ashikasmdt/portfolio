from django.contrib import admin

from .models import Technology



@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "display_order",
        "is_active",
    )
    
    search_fields = (
        "name",
    )
    
    list_filter = (
        "category",
        "is_active"
    )
    
    prepopulated_fields = {
        "slug" : ("name",)
    }
    
    readonly_fields = (
        "created_at",
        "updated_at"
    )
    
    ordering = (
        "display_order",
        "name",
    )