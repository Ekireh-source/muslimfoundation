from django.shortcuts import render
from django.views import View

# Create your views here.
class IndexView(View):
    """Home view class."""
    
    
    def get(self, request, *args, **kwargs):

        return render(request, 'index.html')