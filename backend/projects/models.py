from django.db import models

from technologies.models import Technology

class ProjectStatus(models.TextChoices):
    IN_PROGRESS = "IN_PROGRESS", "In Progress"
    COMPLETED = "COMPLETED", "Completed"
    ARCHIVED = "ARCHIVED", "Archived"
    

class Project(models.Model):
    
    title = models.CharField(
        max_length=255,
        unique=True
    )
    
    slug = models.SlugField(
        max_length=255,
        unique=True
    )
    
    short_description = models.CharField(
        max_length=300
    )
    
    full_description = models.TextField()
    
    thumbnail = models.ImageField(
        upload_to="projects/thumbnails/"
    )
    
    github_url = models.URLField(
        blank=True
    )
    
    live_demo_url = models.URLField(
        blank=True
    )
    
    technologies = models.ManyToManyField(
        Technology,
        related_name="projects"
    )
    
    featured = models.BooleanField(
        default=False
    )
    
    is_active = models.BooleanField(
        default=True
    )
    
    status = models.CharField(
        max_length=20,
        choices=ProjectStatus.choices,
        default=ProjectStatus.COMPLETED
    )
    
    display_order = models.PositiveIntegerField(
        default=1
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    
    updated_at = models.DateTimeField(
        auto_now=True
    )
    
    
    def __str__(self):
        return self.title
    
    
class ProjectImage(models.Model):
    
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="images",
    )
    
    image = models.ImageField(
        upload_to="projects/gallery/",
    )
    
    caption = models.CharField(
        max_length=255,
        blank=True
    )
    
    display_order = models.PositiveIntegerField(
        default=1
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True
    )
    
    class Meta:
        ordering = ("display_order", "id")
        
    def __str__(self):
        return f"{self.project.title} - Image {self.display_order}"