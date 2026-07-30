from django.db import models

# Create your models here.

class Profile(models.Model):
    
    full_name = models.CharField(max_length=100)
    
    hero_headline = models.CharField(max_length=150)
    
    hero_description = models.TextField()
    
    bio = models.TextField()
    
    email = models.EmailField(unique=True)
    
    phone = models.CharField(max_length=20, blank=True)
    
    city = models.CharField(max_length=100, blank=True)
    
    state = models.CharField(max_length=100, blank=True)
    
    country = models.CharField(max_length=100, blank=True)
    
    profile_photo = models.ImageField(
        
        upload_to="profile/photos/",
        blank=True,
        null=True,
    )
    
    resume = models.FileField(
        
        upload_to="profile/resume",
        blank=True,
        null=True,
    )
    
    available_for_work = models.BooleanField(default=True)
    
    show_email = models.BooleanField(default=True)
    
    show_phone = models.BooleanField(default=False)
    
    show_location = models.BooleanField(default=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.full_name