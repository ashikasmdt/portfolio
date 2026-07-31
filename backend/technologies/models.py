from django.db import models

# Create your models here.

class TechnologyCategory(models.TextChoices):
    PROGRAMMING_LANGUAGE = "PROGRAMMING_LANGUAGE", "Programming Language",
    FRONTEND = "FRONT_END", "Frontend",
    FRAMEWORK = "FRAMEWORK", "Framework"
    DATABASE = "DATABASE", "Database"
    TOOL = "TOOL", "Tool"
    CLOUD = "CLOUD", "Cloud"
    DEVOPS = "DEVOPS", "DevOps"
    TESTING = "TESTING", "Testing"
    
    
class Technology(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True
    )
    
    slug = models.SlugField(
        unique=True
    )
    
    category = models.CharField(
        max_length=30,
        choices=TechnologyCategory.choices
    )
    
    icon = models.ImageField(
        upload_to="technologies/icons/",
        blank=True,
        null=True
    )
    
    website = models.URLField(
        blank=True
    )
    
    display_order = models.PositiveIntegerField(
        default=1
    )
    
    is_active = models.BooleanField(
        default=True
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    
    updated_at = models.DateTimeField(
        auto_now=True
    )
    
    
    class Mete:
        ordering = ["display_order", "name"]
        verbose_name = "Technology"
        verbose_name_plural = "Technologies"
        
    
    def __str__(self):
        return self.name