from rest_framework import serializers
from .models import Affirmation, MoodEntry

class AffirmationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Affirmation
        fields = '__all__'

class MoodEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodEntry
        fields = '__all__' 