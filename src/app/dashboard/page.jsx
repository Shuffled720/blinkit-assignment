import ImageRetriver from "@/components/ImageRetriver"
import ImageUploader from "@/components/ImageUploader"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
const index = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user || !user.id) redirect("/")
  return (
    <div className="flex justify-center align-middle my-40">
      <ImageUploader />
    </div>
  )
}

export default index
