import os
from pymongo import MongoClient


class MongoDB:
    _instance = None

    def __new__(cls):
        if not cls._instance:
            cls._instance = super(MongoDB, cls).__new__(cls)
        return cls._instance

    def __init__(self):
        self.client = None
        self.db = None

    def connect(self):
        db_user = os.environ["DB_USER"]
        db_password = os.environ["DB_PASSWORD"]
        db_host = os.environ["DB_HOST"]

        self.client = MongoClient(f"mongodb+srv://{db_user}:{db_password}@{db_host}/")
        self.db = self.client["memes"]
        print("DB와 연결되었습니다.")

    def close(self):
        self.client.close()
        print("DB와 연결이 종료되었습니다.")

    def get_db(self):
        return self.db
