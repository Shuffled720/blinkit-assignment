"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { toast } from "react-toastify"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "./ui/button"
import Link from "next/link"

export default function ImageUploader() {
  const { user } = useKindeBrowserClient()
  const [image, setImage] = useState([])
  // const user = user()
  // console.log(user.id)
  const id = user?.id
  const handleImage = (e) => {
    const file = e.target.files[0]
    setFileToBase(file)
    console.log(file)
  }

  const setFileToBase = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImage(reader.result)
    }
  }
  const submitForm = async (e) => {
    // e.preventDefault()
    try {
      const { data } = await axios.post(`/api/image-upload/${id}`, {
        image,
      })
      if (data.success === true) {
        setImage("")
        toast.success("product created successfully")
      }
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <form>
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" onChange={handleImage} />
        <div className="grid grid-cols-2 my-5 gap-10">
          <Button onClick={submitForm}>Upload</Button>
          <Button asChild>
            <Link href="/dashboard/gallery">Gallery</Link>
          </Button>
        </div>
        {/* <button type="submit" onClick={submitForm}>
          Create
        </button> */}
      </form>
    </div>
  )
}
