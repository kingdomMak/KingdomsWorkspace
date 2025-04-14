INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'core',
    'django_cors_headers',
    'rest_framework',
    'corsheaders',
    'core', 
]

# Also make sure you have these CORS settings
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # 🔥 Must be near the top
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    ...
]


# Add CORS settings
CORS_ALLOW_ALL_ORIGINS = True  # For development only - configure properly for production 

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

CORS_ALLOW_ALL_ORIGINS = True

USE_TZ = True
TIME_ZONE = 'UTC'  # Or change to 'Africa/Johannesburg' for SA
