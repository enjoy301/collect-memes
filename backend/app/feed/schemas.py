from pydantic import BaseModel


class Feed(BaseModel):
    provider: str
    link: str
    is_like: bool | None = False


class FeedInDB(Feed):
    id: str
    object_url: str | None = None


class FeedLike(BaseModel):
    id: str
    is_like: bool
