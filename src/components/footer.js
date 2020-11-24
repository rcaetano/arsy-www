import React from "react"
import logo from "../images/arsy-sig.png"

const Footer = ({ author, title }) => (
  <div className="footer py-5">
    <div className="text-center">
      <img src={logo} style={{ maxWidth: "80px", marginTop: "1em", marginBottom: "1em" }} alt="Logo" />
      <h6 className="text-dark" style={{fontSize:"10px"}} >(c) 2020 Richard Caetano</h6>
    </div>
  </div>
)

export default Footer
