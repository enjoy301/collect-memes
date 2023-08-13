from contextlib import asynccontextmanager
from typing import AsyncGenerator
from fastapi import FastAPI
from database import client

from feed.router import router as feed_router
from auth.router import router as auth_router


@asynccontextmanager
async def lifespan(_application: FastAPI) -> AsyncGenerator:
    # startup

    yield

    # shutdown
    client.close()
    print("Database connection closed.")


app = FastAPI(lifespan=lifespan)


@app.get("/healthcheck", include_in_schema=False)
async def healthcheck() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(feed_router, prefix="", tags=["Feed"])
app.include_router(auth_router, prefix="/auth", tags=["Auth"])
