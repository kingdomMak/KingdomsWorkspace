from django.db import models
from django.contrib.auth.models import User
from django.db import models
from django.contrib.auth.models import User

# ------------------- Affirmation -------------------
class Affirmation(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message[:50]

# ------------------- Mood Entry -------------------
# Define choices at the top
MOOD_CHOICES = [
    ('happy', 'Happy'),
    ('sad', 'Sad'),
    ('anxious', 'Anxious'),
    ('angry', 'Angry'),
    ('calm', 'Calm'),
]

class MoodEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    mood = models.CharField(max_length=20, choices=MOOD_CHOICES)
    note = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.mood} at {self.created_at}"


# ------------------- Journal Entry -------------------
class JournalEntry(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} – {self.created_at.strftime('%Y-%m-%d')}"

# ------------------- Kindness Challenge -------------------
class KindnessChallenge(models.Model):
    message = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

    class Meta:
        ordering = ['-created_at']

# ------------------- Mood Streak -------------------
class MoodStreak(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    current_streak = models.IntegerField(default=0)
    last_entry_date = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.user.username} - {self.current_streak} day streak"

# ------------------- User Badge -------------------
class UserBadge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    badge_name = models.CharField(max_length=100)
    awarded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.badge_name}"

