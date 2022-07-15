import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => (
  <LayoutContainer>
    <Header />
    <Outlet />
  </LayoutContainer>
)
