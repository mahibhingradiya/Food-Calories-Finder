from django.urls import path
from .views import FoodItemView,FoodList
from . import views
from .views import ReviewListCreateView

urlpatterns = [
    path('food/', FoodList.as_view(), name='food-list'),
    path('food/<str:name>/', FoodItemView.as_view()),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('reviews/', ReviewListCreateView.as_view(), name='review-list-create'),
]