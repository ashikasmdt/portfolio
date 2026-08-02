from django.http import Http404

from rest_framework import generics

from .models import Profile
from .serializers import ProfileSerializer




class ProfileAPIView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        profile = Profile.objects.first()

        if profile is None:
            raise Http404("Profile not found")

        return profile