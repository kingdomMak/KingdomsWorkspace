from django.db import models

# Create your models here.

class Affirmation(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message[:50]

class MoodEntry(models.Model):
    mood = models.CharField(max_length=100)
    note = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.mood} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"
