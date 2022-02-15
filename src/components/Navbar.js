import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import 'normalize.css';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  margin: 8px;
  color: blue;
`

export const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/pics">Pics</Link>
      <Link to="/contact">Contact</Link>
    </Wrapper>
  )
}
