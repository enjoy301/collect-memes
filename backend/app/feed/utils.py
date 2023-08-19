from urllib import request
from io import BytesIO


def get_youtube_thumbnail(url: str) -> BytesIO:
    url_parts = url.split("/")
    video_id = url_parts[-1].split("?")[0]
    img_url = f"https://i.ytimg.com/vi/{video_id}/oar2.jpg"

    response = request.urlopen(img_url).read()

    return BytesIO(response)
