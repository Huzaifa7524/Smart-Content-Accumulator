from django.urls import path
from smart_ac import views
from django.contrib.auth import views as auth_view
from .forms import UserLoginForm,UserPasswordChangeForm,UserPasswordResetForm,UserSetPasswordForm

urlpatterns = [
    ############################# home page #####################################
    path('', views.index, name='index'),
    path('contact/', views.ContactUS, name='contact'),
    path('about/', views.AboutUS, name='about'),
    # path('data/<str:data>/', views.data_show, name='data'),
    path('data/<str:data>/<str:title>/', views.data_show, name='data'),
    # path('all_articles/', views.data_list, name='all_articles'),
    path('all_posts/', views.show_post, name='posts'),
    path('post_detail/<int:pk>/', views.data_show, name='post_detail'),
    ############################# home page End #####################################
    ############################# Account Login #####################################
    path('profile/', views.Profile, name='profile'),
    path('accounts/login/', auth_view.LoginView.as_view(template_name='sma/login.html',authentication_form=UserLoginForm) , name='login'),
    path('register/', views.User_Registration_view.as_view(), name='register'),
    path('logout/', auth_view.LogoutView.as_view(next_page='index'), name='logout'),
    ############################# End Account Login ###################################
    ############################# Change Password #####################################
    path('passwordchange/', auth_view.PasswordChangeView.as_view(template_name='sma/passwordchange.html',form_class=UserPasswordChangeForm,success_url='/passwordchangedone/'), name='password-change'),
    path('passwordchangedone/', auth_view.PasswordChangeDoneView.as_view(template_name='sma/passwordchangedone.html'), name='password-change-done'),
    ############################# End Change Password ################################
    ############################# Reset Password #####################################

    path('password-reset/', auth_view.PasswordResetView.as_view(template_name='sma/password_reset.html',html_email_template_name='sma/password_reset_email.html',form_class=UserPasswordResetForm), name='password-reset'),
    path('password-reset/done/', auth_view.PasswordResetDoneView.as_view(template_name='sma/password_reset_done.html'), name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/', auth_view.PasswordResetConfirmView.as_view(template_name='sma/password_reset_confirm.html',form_class=UserSetPasswordForm), name='password_reset_confirm'),
    path('password-reset-complete/', auth_view.PasswordResetCompleteView.as_view(template_name='sma/password_reset_complete.html'), name='password_reset_complete'),
    ############################# End Reset Password ##################################
     
]
