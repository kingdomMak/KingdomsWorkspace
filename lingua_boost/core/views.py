from datetime import datetime, timedelta
from .models import MoodStreak, MoodBadge
from django.db import IntegrityError
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .serializers import MoodBadgeSerializer

class MoodEntryView(CreateAPIView):
    def _award_badge(self, user, badge_name):
        """Helper method to award a badge if not already awarded"""
        try:
            MoodBadge.objects.create(user=user, name=badge_name)
            return True
        except IntegrityError:
            return False

    def perform_create(self, serializer):
        # Get or create mood streak for the user
        mood_streak, created = MoodStreak.objects.get_or_create(user=self.request.user)
        
        today = datetime.now().date()
        
        if mood_streak.last_logged_date:
            # Check if the last entry was yesterday
            days_difference = (today - mood_streak.last_logged_date).days
            
            if days_difference == 1:
                # Logged consecutive day, increment streak
                mood_streak.current_streak += 1
            elif days_difference > 1:
                # Streak broken, reset to 1
                mood_streak.current_streak = 1
        
        # Update best streak if current streak is higher
        mood_streak.best_streak = max(mood_streak.current_streak, mood_streak.best_streak)
        mood_streak.last_logged_date = today
        mood_streak.save()
        
        # Check for badge awards
        if mood_streak.current_streak == 3:
            self._award_badge(self.request.user, "3-Day Streak")
        elif mood_streak.current_streak == 7:
            self._award_badge(self.request.user, "7-Day Streak")
        
        # Save the mood entry
        serializer.save(user=self.request.user)

class MoodBadgeListView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = MoodBadgeSerializer

    def get_queryset(self):
        return MoodBadge.objects.filter(user=self.request.user).order_by('-awarded_on') 