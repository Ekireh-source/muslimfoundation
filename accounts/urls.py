from django.urls import path
from .views import (
    IndexView,
    AboutView,
    EventView,
    ContactView,
    BoardMembersView,
    SponsersView,
    MediaView
)
app_name = "accounts"

urlpatterns = [
    path('', IndexView.as_view(), name="home"),
    path('about/', AboutView.as_view(), name="about"),
    path('events/', EventView.as_view(), name="events"),
    path('contacts/', ContactView.as_view(), name="contacts"),
    path('board-members/', BoardMembersView.as_view(), name="board-members"),
    path('sponsers/', SponsersView.as_view(), name="sponsers"),
    path('media/', MediaView.as_view(), name="media")
]