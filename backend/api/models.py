from django.db import models

# Create your models here.
from django.db import models

class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    carbohydrates_total_g = models.DecimalField(max_digits=5, decimal_places=2)
    cholesterol_mg = models.DecimalField(max_digits=5, decimal_places=2)
    fat_saturated_g = models.DecimalField(max_digits=5, decimal_places=2)
    fat_total_g = models.DecimalField(max_digits=5, decimal_places=2)
    fiber_g = models.DecimalField(max_digits=5, decimal_places=2)
    potassium_mg = models.DecimalField(max_digits=5, decimal_places=2)
    protein_g = models.DecimalField(max_digits=5, decimal_places=2)
    sodium_mg = models.DecimalField(max_digits=5, decimal_places=2)
    sugar_g = models.DecimalField(max_digits=5, decimal_places=2)
    calories = models.DecimalField(max_digits=5, decimal_places=2)
    
class Review(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name