class MoodBadgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodBadge
        fields = ['id', 'name', 'awarded_on']
        read_only_fields = ['id', 'name', 'awarded_on'] 