from django.shortcuts import render, redirect, get_object_or_404
from .scraping_data import get_data
from django.views import View
from django.contrib import messages
from .forms import UserRegisterForm,Contact_Us
from django.contrib.auth import authenticate, login
from .models import Article
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail



def index(request):
    if request.method == 'POST':
        data = request.POST.get('url')
        if not data:
            messages.error(request, 'Invalid URL')
            return redirect('index')
        if Article.objects.filter(url=data).exists():
            article = Article.objects.get(url=data)
            messages.info(request, 'Url already exists!')
            return redirect('data', data=article.summary, title=article.title)
        else:
            # create new article instance
            summary, post_title , image = get_data(data)
            # get first image from url
            image_url = image[0]
            article = Article(title=post_title, summary=summary, url=data , image=image_url)
            # save article to database
            article.save()
            article = Article.objects.get(title=post_title, summary=summary , url=data)
            return render(request, 'sma/data.html', {'article': article, 'image': image_url})
            # return redirect('data', data=summary, title=post_title)
    else:
        return render(request, 'sma/index.html')

def show_post(request):
    all_posts = Article.objects.all()
    return render(request, 'sma/all_posts.html', {'page_obj': all_posts})

def data_show(request,data,title):
    # get article instance from database
    post = Article.objects.get(title=title, summary=data)
    return render(request, 'sma/data.html', {'article': post})

def data_show_detail(request,pk):
    # get article instance from database
    post = Article.objects.get(pk=pk)
    return render(request, 'sma/data.html', {'article': post})


def data_list(request):
    if request.method == 'GET':
        search_query = request.GET.get('q')
        if search_query:
            articles = Article.objects.filter(title__icontains=search_query)
        else:
            articles = Article.objects.all()
    return render(request, 'sma/all_posts.html', {'page_obj': articles})


class User_Registration_view(View):
    def get(self, request):
        form = UserRegisterForm()
        return render(request, 'sma/register.html', {'form': form})

    def post(self, request):
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('login')
        else:
            return render(request, 'sma/register.html', {'form': form})

@login_required
def Profile(request):
    return render(request, 'sma/profile.html')


def AboutUS(request):
    return render(request, 'sma/about.html')

def ContactUS(request):
    if request.method == 'POST':
        form = Contact_Us(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            message = form.cleaned_data['message']

            # Send email
            send_mail(
                'Contact Form Submission',
                f'Name: {name}\nEmail: {email}\n Phone: {phone} \n\nMessage:\n{message}',
                'huzaifatahir7524@gmail.com',  # Replace with your email address
                [f'{email}'],  # Replace with the recipient's email address
                fail_silently=False,
            )
            return render(request, 'sma/success.html')
    else:
        form = Contact_Us()
    return render(request, 'sma/contact.html', {'form': form})



