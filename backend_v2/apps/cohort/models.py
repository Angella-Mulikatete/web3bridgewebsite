from django.db import models
from django.utils.translation import gettext_lazy as _
from utils.helpers.models import BaseModelBaseMixin
from utils.models import Image
from utils.enums.models import RegistrationStatus
from .helpers.model import testimonial_image_location

# Model
# Course model
class Course(BaseModelBaseMixin, models.Model):  
    name= models.CharField(_('course name'), max_length=1000, blank=False, null=False)
    description= models.TextField(_("description"), blank=False, null=False)
    venue= models.JSONField(_("venue"), null=True, blank=True, default=list, editable=True)
    extra_info= models.TextField(_("extra_info"), blank=False, null=False)
    images= models.ManyToManyField(Image)
    
    def __str__(self):
        return f"< {type(self).__name__}({self.name}) >"
    
# Registration openings model
class Registration(BaseModelBaseMixin, models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    is_open = models.BooleanField(default=False)
    start_date = models.DateField()
    end_date = models.DateField()
    
    def __str__(self):
        return f"< {type(self).__name__}({self.course.name} {self.start_date}-{self.end_date}) >"
    
# Participant model
class Participant(BaseModelBaseMixin, models.Model): 
    last_name= models.CharField(_('last name'), max_length=255, blank=False, null=False)
    first_name= models.CharField(_('first name'), max_length=255, blank=False, null=False)
    wallet_address= models.CharField(_('first name'), max_length=255, blank=False, null=False)
    email= models.CharField(_('email'), max_length=255, blank=False, null=False)
    registration = models.ForeignKey(Registration, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=RegistrationStatus.choices(), default=RegistrationStatus.PENDING.value) 
    
    def __str__(self):
        return f"< {type(self).__name__}({self.last_name} {self.first_name}) >"
    
# Testimonial model
class Testimonial(BaseModelBaseMixin, models.Model):  
    headline= models.CharField(_('headline'), max_length=1000, blank=False, null=False)
    last_name= models.CharField(_('last name'), max_length=255, blank=False, null=False)
    first_name= models.CharField(_('first name'), max_length=255, blank=False, null=False)
    testimony= models.TextField(_("testimony"), blank=False, null=False)
    picture= models.ImageField(upload_to=testimonial_image_location, blank=False, null=False)
    brief= models.CharField(_('author brief'), max_length=255, blank=False, null=False)
    
    def __str__(self):
        return f"< {type(self).__name__}({self.last_name} {self.first_name}) >"
    
    
        
    
