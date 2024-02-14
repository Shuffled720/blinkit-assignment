"use client"

import React, { useEffect, useState } from "react"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import Image from "next/image"

const ImageRetriver = () => {
  const [images, setImages] = useState([])

  const { user } = useKindeBrowserClient()
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`/api/images/${user.id}`)
        const data = await response.json()
        setImages(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchImage()
  }, [user?.id])
  return (
    <div className="container grid lg:grid-cols-3 md:grid-cols-1 p-5">
      {images.map((image, key) => (
        <div key={key} className="m-2 flex">
          <p>{key + 1})</p>
          <Image
            className="rounded-lg"
            width={700}
            height={700}
            key={key}
            src={image.imageUrl}
            alt="image"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageRetriver
