from .views import MoodBadgeListView

urlpatterns = [
    path('badges/', MoodBadgeListView.as_view(), name='mood-badges'),
] 