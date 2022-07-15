import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background-color: ${defaultTheme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
