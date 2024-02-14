import Header from "@/components/Header"
import React from "react"
export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  )
}
