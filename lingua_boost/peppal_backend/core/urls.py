from django.urls import path
from .views import AffirmationListView, MoodEntryView

urlpatterns = [
    path('affirmations/', AffirmationListView.as_view(), name='affirmation-list'),
    path('moods/', MoodEntryView.as_view(), name='mood-entry'),  # ← Add this line
]
