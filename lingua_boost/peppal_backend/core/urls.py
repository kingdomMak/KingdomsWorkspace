from django.urls import path
from .views import AffirmationListView

urlpatterns = [
    path('affirmations/', AffirmationListView.as_view(), name='affirmation-list'),
] 