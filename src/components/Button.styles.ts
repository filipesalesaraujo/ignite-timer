import styled, {css} from "styled-components";
import {defaultTheme} from "../styles/themes/default";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${defaultTheme["green-500"]};

    /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`