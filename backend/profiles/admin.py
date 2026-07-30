from django.contrib import admin
from .models import Profile

# Register your models here.

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "email",
        "available_for_work",
        "updated_at",
    )
    
    search_fields = (
        "full_name",
        "email",
        "city",
        "country"
    )
    
    list_filter = (
        "available_for_work",
        "country"
    )
    
    readonly_fields = (
        "created_at",
        "updated_at",
    )