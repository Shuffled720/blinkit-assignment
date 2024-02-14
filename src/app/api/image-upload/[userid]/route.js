import cloudinary from "@/utils/cloudinary/cloudinary"

import Image from "@/utils/models/image"
import { connectToDB } from "@/utils/db/mongodb"
export async function POST(req, { params }) {
  await connectToDB()

  const body = await req.json()
  const { image } = await body
  // const urlParams = new URLSearchParams(req.url)
  // const userId = urlParams.get("userid")
  const userId = params.userid
  console.log(userId)

  try {
    const result = await cloudinary.uploader.upload(image, {})
    console.log(result)

    const newImage = new Image({ userId: userId, imageUrl: result.url })

    await newImage.save()
    return new Response(JSON.stringify(result), { status: 200 })
  } catch (error) {
    console.log(error)
    return new Response("FAILED ", { status: 500 })
  }
}
