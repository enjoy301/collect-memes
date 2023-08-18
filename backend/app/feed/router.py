from fastapi import APIRouter

from feed import service
from feed.schemas import Feed, FeedInDB, FeedLike

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


@router.put("/feed/{feed_id}/like")
async def like_feed(feed_id: str, is_like: bool) -> FeedLike:
    updated_feed = await service.like_feed(feed_id, is_like)
    return updated_feed
