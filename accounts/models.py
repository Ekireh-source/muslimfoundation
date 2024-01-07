from datetime import timezone
from django.db import models
from .managers import CustomUserManager
from django.contrib.auth.models import AbstractUser
from django.core.validators import FileExtensionValidator 






class TimestampMixin(models.Model):
    """
    Model mixin that provides timestamping fields.
    """

    create_date = models.DateTimeField("date created", auto_now_add=True)
    modify_date = models.DateTimeField("date modified", auto_now=True)

    class Meta:
        abstract = True

class User(TimestampMixin, AbstractUser):
    """
    Model class that extends the default User model
    """

    username = None
    email = models.EmailField("email_address", unique=True)
    # phone_number = PhoneNumberField(blank=False, null=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    objects = CustomUserManager()
    
    
    @property
    def is_verified(self):
        return self.profile.email_verified and self.profile.phone_verified
    

    @property
    def has_profile(self):
        has_profile = False
        try:
            has_profile = (self.profile is not None)
        except Profile.DoesNotExist:
            pass
        return has_profile


class Profile(TimestampMixin, models.Model):
    """Model class to handle user profiles"""

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email_verified = models.BooleanField(default=False)
    phone_verified = models.BooleanField(default=False)
    id_verified = models.BooleanField(default=False)
    id_image = models.URLField(null=True, blank=True)
    country = models.CharField(max_length=50)

    def __str__(self):
        """
        Returns a string representation of the profile.
        """
        return f"{self.user.email}"
    


class Media(models.Model):
    video = models.FileField(upload_to='videos_uploaded',null=True,
    validators=[FileExtensionValidator(allowed_extensions=['MOV','avi','mp4','webm','mkv'])])
    date_uploaded = models.DateTimeField(auto_now_add=True)
    description = models.TextField()