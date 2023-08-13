from pydantic import BaseModel


class Feed(BaseModel):
    provider: str
    link: str


class FeedInDB(Feed):
    id: str
