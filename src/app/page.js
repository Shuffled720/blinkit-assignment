import Image from "next/image"
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-10">
        <Button className="p-7 rounded-xl" asChild>
          <LoginLink>Login In</LoginLink>
        </Button>
        <Button className="p-7 rounded-xl" asChild>
          <RegisterLink>Sign up</RegisterLink>
        </Button>
      </div>
    </>
  )
}
