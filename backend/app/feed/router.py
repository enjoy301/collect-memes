from fastapi import APIRouter

from feed import service
from feed.schemas import Feed, FeedInDB

router = APIRouter()


@router.get("/feeds/me")
async def get_feeds() -> list[FeedInDB]:
    feeds = await service.get_feeds()
    return feeds


@router.post("/feed")
async def create_feed(feed: Feed) -> FeedInDB:
    new_feed = await service.create_feed(feed)
    return new_feed


@router.delete("/feed/{feed_id}")
async def delete_feed(feed_id: str) -> None:
    await service.delete_feed(feed_id)
