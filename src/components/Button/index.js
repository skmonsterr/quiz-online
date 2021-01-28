import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button `
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "type", "button"]).isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;