from django.db import models
from django.contrib.auth.models import User

# Existing model for daily kindness messages
class KindnessChallenge(models.Model):
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-created_at']


# 🔥 New model to track user mood streaks
class MoodStreak(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    current_streak = models.IntegerField(default=0)
    last_entry_date = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - Streak: {self.current_streak}"


# 🏅 New model to track badges earned by users
class UserBadge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    badge_name = models.CharField(max_length=100)
    awarded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - Badge: {self.badge_name}"
