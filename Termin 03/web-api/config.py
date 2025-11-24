import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # Get allowed origins for CORS from environment variable, default to all origins
    CORS_ALLOWED_ORIGINS = os.getenv('CORS_ALLOWED_ORIGINS', '*').split(',')
    # Connect to MongoDB using the provided URI and database name
    MONGO_URI = f"{os.getenv('MONGO_URI')}/{os.getenv('MONGO_DB_NAME')}"
    