from django.db import models
from django.contrib.auth.models import User

class KindnessChallenge(models.Model):
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-created_at']  # Orders challenges with newest first 

class MoodStreak(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='mood_streak')
    current_streak = models.IntegerField(default=1)
    best_streak = models.IntegerField(default=1)
    last_logged_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username}'s Mood Streak"

class MoodBadge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mood_badges')
    name = models.CharField(max_length=100)
    awarded_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['user', 'name']  # Prevent duplicate badges

    def __str__(self):
        return f"{self.user.username} - {self.name}" 