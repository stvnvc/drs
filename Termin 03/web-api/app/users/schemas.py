from typing import Optional
from pydantic import BaseModel, Field, field_serializer, field_validator
from datetime import datetime

class UserBase(BaseModel):
    """Base schema for optional user fields."""
    country: Optional[str] = None
    birth_date: Optional[datetime] = None
    profile_image: Optional[str] = None # base64 encoded string

class UserCreate(UserBase):
    """Schema for creating a new user."""
    first_name: str = Field(..., min_length=3)
    last_name: str = Field(..., min_length=3)

class UserUpdate(UserBase):
    """Schema for updating an existing user."""
    first_name: Optional[str] = Field(None, min_length=3)
    last_name: Optional[str] = Field(None, min_length=3)

class UserOut(UserBase):
    """Schema for outputting user data."""
    id: str
    first_name: str
    last_name: str

    # def model_post_init(self, __context=None):
    #     if isinstance(self.birth_date, datetime):
    #         self.birth_date = self.birth_date.strftime("%Y-%m-%d")
    @field_validator('birth_date', mode='before')
    @classmethod
    def parse_birth_date(cls, v):
        if isinstance(v, str):
            return datetime.strptime(v, '%Y-%m-%d')
        return v
    
    @field_serializer('birth_date')
    def serialize_birth_date(self, value: Optional[datetime]) -> Optional[str]:
        if value is not None:
            return value.strftime("%Y-%m-%d")
        return None