from config import settings
from pymongo import MongoClient

client = MongoClient(settings.DATABASE_URL)
database = client["memes"]
