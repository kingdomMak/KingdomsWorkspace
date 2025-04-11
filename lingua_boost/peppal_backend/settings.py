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
]

# Also make sure you have these CORS settings
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    # ... rest of your middleware ...
]

# Add CORS settings
CORS_ALLOW_ALL_ORIGINS = True  # For development only - configure properly for production 