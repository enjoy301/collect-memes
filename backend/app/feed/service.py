from database import database
from bson.objectid import ObjectId

from feed.schemas import Feed, FeedInDB


async def get_feeds() -> list[FeedInDB]:
    result = list(database.get_collection("feed").find())

    for feed in result:
        feed["id"] = str(feed["_id"])

    return [FeedInDB(**feed) for feed in result]


async def create_feed(feed: Feed) -> FeedInDB:
    if feed.provider is "youtube":
        url_parts = feed.url.split("/")
        feed.video_id = url_parts[-1].split("?")[0]

    _id = database.get_collection("feed").insert_one(feed.model_dump()).inserted_id

    feed = FeedInDB(**feed.model_dump(), id=str(_id))

    return feed


async def delete_feed(feed_id: str) -> None:
    database.get_collection("feed").delete_one({"_id": ObjectId(feed_id)})
