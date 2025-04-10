from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Affirmation
from .serializers import AffirmationSerializer

# Create your views here.

class AffirmationListView(APIView):
    def get(self, request):
        affirmations = Affirmation.objects.all().order_by('-created_at')[:1]
        serializer = AffirmationSerializer(affirmations, many=True)
        return Response(serializer.data)
