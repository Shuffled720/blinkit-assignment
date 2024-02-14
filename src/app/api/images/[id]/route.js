import { connectToDB } from "@/utils/db/mongodb"
import Image from "@/utils/models/image"
export const GET = async (request, { params }) => {
  try {
    await connectToDB()
    const id = params.id
    console.log(id)
    const images = await Image.find({ userId: id })
    if (!images) return new Response("images not found", { status: 404 })
    return new Response(JSON.stringify(images), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("failed to fetch all images", { status: 500 })
  }
}
