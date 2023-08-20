from io import BytesIO
import boto3

from config import settings


client = boto3.client(
    "s3",
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
)


def upload_fileobj(fileobj: BytesIO, key: str):
    client.upload_fileobj(
        fileobj,
        "collect-memes",
        key,
        ExtraArgs={"ACL": "public-read"},
    )
