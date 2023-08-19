from database import database
from bson.objectid import ObjectId

from s3 import upload_fileobj
from config import settings

from feed.schemas import Feed, FeedInDB, FeedLike
from feed.utils import get_youtube_thumbnail, get_tiktok_thumbnail


async def get_feeds() -> list[FeedInDB]:
    result = list(database.get_collection("feed").find())

    for feed in result:
        feed["id"] = str(feed["_id"])

    return [FeedInDB(**feed) for feed in result]


async def create_feed(feed: Feed) -> FeedInDB:
    id = str(database.get_collection("feed").insert_one(feed.model_dump()).inserted_id)

    if feed.provider == "youtube":
        fileobj = get_youtube_thumbnail(feed.link)
        upload_fileobj(fileobj, f"feed/{id}.jpg")
    elif feed.provider == "tiktok":
        fileobj = get_tiktok_thumbnail(feed.link)
        upload_fileobj(fileobj, f"feed/{id}.jpg")

    database.get_collection("feed").update_one(
        {"_id": ObjectId(id)},
        {"$set": {"object_url": f"{settings.AWS_S3_BUCKET_URL}/feed/{id}.jpg"}},
    )

    feedInDB = FeedInDB(
        **feed.model_dump(),
        id=id,
        object_url=f"{settings.AWS_S3_BUCKET_URL}/feed/{id}.jpg",
    )

    return feedInDB


async def delete_feed(feed_id: str) -> None:
    database.get_collection("feed").delete_one({"_id": ObjectId(feed_id)})


async def like_feed(feed_id: str, is_like: bool) -> FeedLike:
    feed = database.get_collection("feed").find_one({"_id": ObjectId(feed_id)})
    feed["is_like"] = True if is_like else False
    database.get_collection("feed").update_one(
        {"_id": ObjectId(feed_id)}, {"$set": feed}
    )

    return FeedLike(id=feed_id, is_like=feed["is_like"])
