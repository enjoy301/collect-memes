from urllib import request
from io import BytesIO
import json


def get_youtube_thumbnail(url: str) -> BytesIO:
    url_parts = url.split("/")
    video_id = url_parts[-1].split("?")[0]
    img_url = f"https://i.ytimg.com/vi/{video_id}/oar2.jpg"

    response = request.urlopen(img_url).read()

    return BytesIO(response)


def get_tiktok_thumbnail(url: str) -> BytesIO:
    # 1. oembed api를 이용해서 썸네일 이미지 url을 가져온다.
    request_url = f"https://www.tiktok.com/oembed?url={url}"
    response = request.urlopen(request_url).read()

    print(response)

    # 2. 가져온 url로 요청을 보내서 이미지를 가져온다.
    img_url = json.loads(response)["thumbnail_url"]
    response = request.urlopen(img_url).read()

    return BytesIO(response)
