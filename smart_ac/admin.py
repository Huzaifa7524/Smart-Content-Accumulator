from django.contrib import admin

# Register your models here.

from .models import Article

@admin.register(Article)


class ModelAdminArticle(admin.ModelAdmin):
    list_display = ('id','title','summary','url','image')
    




