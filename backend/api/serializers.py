from rest_framework import serializers
from .models import FoodItem,Review

class FoodItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodItem
        fields = '__all__'
        
# reviews/serializers.py


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'name', 'description', 'created_at']




# convert Django models into JSON and vice versa
# This inner class specifies the model and fields to be included in the serialization.