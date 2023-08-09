from fastapi import FastAPI
from controllers import user_controller
from configs.database import MongoDB
from configs.env import load_env

load_env()
app = FastAPI()
db = MongoDB()


@app.on_event("startup")
def on_app_start():
    db.connect()


@app.on_event("shutdown")
def on_app_shutdown():
    db.close()


app.include_router(user_controller.router)
