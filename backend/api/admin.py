from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import FoodItem

class FoodItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'carbohydrates_total_g', 'cholesterol_mg', 'fat_saturated_g', 'fat_total_g', 'fiber_g', 'potassium_mg', 'protein_g', 'sodium_mg', 'sugar_g', 'calories')
    search_fields = ('name',)
    list_filter = ('name',)

admin.site.register(FoodItem, FoodItemAdmin)


# reviews/admin.py
from django.contrib import admin
from .models import Review

# Create a custom admin class if you want to customize the admin interface
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at')  # Add any fields you want to display
    search_fields = ('name',)  # Fields you want to be searchable in the admin
    ordering = ('-created_at',)  # Order by creation date, descending

# Register the Review model with the admin site
admin.site.register(Review, ReviewAdmin)
