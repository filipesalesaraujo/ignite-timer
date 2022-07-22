import styled from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${defaultTheme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${defaultTheme['green-500']};
  &:not(:disabled):hover {
    background-color: ${defaultTheme['gray-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${defaultTheme['red-500']};
  &:not(:disabled):hover {
    background-color: ${defaultTheme['red-700']};
  }
`
