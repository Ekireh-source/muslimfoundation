from django.shortcuts import render
from django.views import View

# Create your views here.
class IndexView(View):
    """Home view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'index.html')



class AboutView(View):
    """About view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'about.html')
    


class EventView(View):
    """Event view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'events.html')
    


class ContactView(View):
    """Contact view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'contact.html')


class BoardMembersView(View):
    """Boardmember view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'boardmembers.html')



class SponsersView(View):
    """Sponser view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'sponsers.html')
    


class MediaView(View):
    """Media view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'media.html')
    
    def post(self, request, *args, **kwargs):

        return render(request, 'media.html')