import styled, { css } from 'styled-components';

type StyledBtnPropsType = {
  color?: string
  primary?: boolean
  outlined?: boolean
}

export const CardButtons = styled.div`
  width: 100%;
`
export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  background-color: ${props => props.color || "#5570f6"};
  color: #ffffff;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: #5570f6;
    text-decoration: none;
  }

  ${props => props.outlined && css<StyledBtnPropsType>`
    border: 1px solid ${props => props.color || "#5570f6"};
    color: ${props => props.color || "#5570f6"};
    background-color: transparent;
  `}

  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "#5570f6"};
    color: #ffffff;
  `}
`
