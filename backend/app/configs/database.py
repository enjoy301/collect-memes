import os
from pymongo import MongoClient


class MongoDB:
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
