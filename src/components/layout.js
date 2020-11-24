import React, { useEffect } from "react"
import Navibar from "./navibar"
import Footer from "./footer"

const Layout = ({ children, location }) => {
  useEffect(() => {
    // emergence.init()
  })

  return (
    <div className="container" style={{maxWidth: '800px'}}>
      <Navibar title="arsy" location={location} />
      <main className="pb-5">
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
