from pydantic import BaseModel


class Feed(BaseModel):
    provider: str
    link: str
    video_id: str | None = None


class FeedInDB(Feed):
    id: str
