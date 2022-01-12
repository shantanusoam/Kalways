import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media screen and (max-width: 768px) and (max-width:1024px) {
      ${props}
  
}
  `;
};