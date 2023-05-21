from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    summary = models.TextField()
    url = models.CharField(max_length=300)
    image = models.CharField(max_length=300)
    
        
