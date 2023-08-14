from pydantic import BaseModel


class Feed(BaseModel):
    provider: str
    link: str
    youtube_id: str


class FeedInDB(Feed):
    id: str
