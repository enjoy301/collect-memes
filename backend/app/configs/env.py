import os
from dotenv import load_dotenv


def load_env():
    load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../.env"))
