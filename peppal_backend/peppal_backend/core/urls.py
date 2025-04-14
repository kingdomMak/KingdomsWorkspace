from django.urls import path
from .views import AffirmationListView, MoodEntryView, JournalEntryView, KindnessChallengeListView


urlpatterns = [
    path('affirmations/', AffirmationListView.as_view(), name='affirmation-list'),
    path('moods/', MoodEntryView.as_view(), name='mood-entry'),
    path('journal/', JournalEntryView.as_view(), name='journal-entries'),
    path('challenges/', KindnessChallengeListView.as_view(), name='kindness-challenge'),

]
