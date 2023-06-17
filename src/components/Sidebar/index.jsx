import React from 'react'
import { Container, Content } from './styles'
import { FaTimes } from 'react-icons/fa'
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Text="Início" />
        <SidebarItem Text="Arte" />
        <SidebarItem Text="Ciência" />
        <SidebarItem Text="Cultura" />
        <SidebarItem Text="Economia" />
        <SidebarItem Text="Esporte" />
        <SidebarItem Text="Meio ambiente" />
        <SidebarItem Text="Mundo" />
        <SidebarItem Text="Política" />
        <SidebarItem Text="Saúde" />
        <SidebarItem Text="Tecnologia" />
        <SidebarItem Text="Turismo" />
      </Content>
    </Container>
  )
}

export default Sidebar