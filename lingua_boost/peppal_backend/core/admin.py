from django.contrib import admin
from .models import Affirmation, MoodEntry, JournalEntry, KindnessChallenge

# Register all models to make them editable in admin
admin.site.register(Affirmation)
admin.site.register(MoodEntry)
admin.site.register(JournalEntry)
admin.site.register(KindnessChallenge)  # ✅ This is the key part


