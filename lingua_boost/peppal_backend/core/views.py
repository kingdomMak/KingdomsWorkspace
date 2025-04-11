from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Affirmation, MoodEntry, JournalEntry
from .serializers import AffirmationSerializer, MoodEntrySerializer, JournalEntrySerializer

class AffirmationListView(APIView):
    def get(self, request):
        affirmations = Affirmation.objects.all().order_by('-created_at')[:1]
        serializer = AffirmationSerializer(affirmations, many=True)
        return Response(serializer.data)

class MoodEntryView(APIView):
    def get(self, request):
        moods = MoodEntry.objects.all().order_by('-timestamp')[:10]  # Last 10 moods
        serializer = MoodEntrySerializer(moods, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MoodEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class JournalEntryView(APIView):
    def get(self, request):
        entries = JournalEntry.objects.all().order_by('-created_at')
        serializer = JournalEntrySerializer(entries, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = JournalEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)