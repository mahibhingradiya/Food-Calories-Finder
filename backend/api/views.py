from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import FoodItem
from .serializers import FoodItemSerializer

class FoodItemView(generics.RetrieveAPIView):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    lookup_field = 'name'

    def get_object(self):
        name = self.kwargs['name']
        try:
            return FoodItem.objects.get(name=name)
        except FoodItem.DoesNotExist:
            return None
        
class FoodList(generics.ListAPIView):
    queryset = FoodItem.objects.all()
    serializer_class = FoodItemSerializer
    
    
    
    
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate

# User signup
@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create_user(username=username, password=password)
    return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)

# User login
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# User logout
@api_view(['POST'])
def logout(request):
    try:
        token = RefreshToken(request.data["refresh"])
        token.blacklist()  # Blacklist the refresh token
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_205_RESET_CONTENT)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    
    
# reviews/views.py

from rest_framework import generics
from .models import Review
from .serializers import ReviewSerializer

class ReviewListCreateView(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer




# A generic view provided by Django REST Framework (DRF) to handle GET requests for a single instance of a model.
# objects.all This view will try to retrieve objects from the entire set of FoodItem instances
# self.kwargs['name']: This retrieves the name parameter from the URL. kwargs is a dictionary of keyword arguments passed to the view from the URL.
# querying the object, serializing it, and returning the response