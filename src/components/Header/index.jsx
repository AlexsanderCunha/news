import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../Images/logo.png'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <img src={logo} alt="noticias" />
      <div></div>
    </Container>
  );
}

export default Header