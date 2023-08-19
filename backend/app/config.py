from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str

    AWS_ACCESS_KEY_ID: str
    AWS_SECRET_ACCESS_KEY: str
    AWS_S3_BUCKET_URL: str

    class Config:
        env_file = "../.env"


settings = Settings()
