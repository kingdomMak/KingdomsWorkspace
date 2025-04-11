from rest_framework import serializers
from .models import Affirmation, MoodEntry, JournalEntry

class AffirmationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Affirmation
        fields = '__all__'

class MoodEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodEntry
        fields = ['id', 'user', 'mood', 'note', 'created_at']
        read_only_fields = ['user', 'created_at']

class JournalEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = '__all__'

from rest_framework import serializers
from .models import KindnessChallenge

class KindnessChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = KindnessChallenge
        fields = '__all__'

from .models import KindnessChallenge

class KindnessChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = KindnessChallenge
        fields = '__all__'
