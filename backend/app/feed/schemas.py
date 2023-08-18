from pydantic import BaseModel


class Feed(BaseModel):
    provider: str
    link: str
    is_like: bool | None = False
    video_id: str | None = None


class FeedInDB(Feed):
    id: str


class FeedLike(BaseModel):
    id: str
    is_like: bool
