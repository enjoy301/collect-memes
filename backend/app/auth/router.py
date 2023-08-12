from fastapi import APIRouter


router = APIRouter()


@router.get("/user")
async def get_user() -> dict[str, str]:
    return {"message": "Hello from user!"}
