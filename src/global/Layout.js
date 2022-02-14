import React from "react"
import { Cursor, Navbar } from "../components"
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./styles.css"

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  })

  window.addEventListener("mousemove", (event) => {
    const cursor = document.querySelector(".cursor");

    window.requestAnimationFrame(() => {
      cursor.style.left = `${event.pageX}px`
      cursor.style.top = `${event.pageY}px`
    });
  })

  return (
    <>
      <Cursor />
      <Navbar />
      {children}
    </>
  )
}

export default Layout;