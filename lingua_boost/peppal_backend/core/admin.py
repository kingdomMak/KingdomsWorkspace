from django.contrib import admin
from .models import MoodEntry

@admin.register(MoodEntry)
class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ['user', 'mood', 'created_at']
    ordering = ['-created_at']
    fields = ['user', 'mood', 'note', 'created_at']  # 'created_at' added manually

