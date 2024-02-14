import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"
import Link from "next/link"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="w-full bg-cyan-50 h-12 flex justify-center items-center">
      <p className="text-xl font-bold">
        <Link href="/dashboard">UploadPics</Link>
      </p>
      <LogoutLink className="fixed top-0 right-0 m-1">
        <Button variant="outline">Logout</Button>
      </LogoutLink>
    </div>
  )
}

export default Header
