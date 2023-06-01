from django.contrib import admin

# Register your models here.

from .models import Article,Contact_us

@admin.register(Article)


class ModelAdminArticle(admin.ModelAdmin):
    list_display = ('id','title','summary','url','image')
    

@admin.register(Contact_us)

class ModelAdminContact_us(admin.ModelAdmin):
    list_display = ('id','name','email','phone','message')


