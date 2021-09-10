import styled from 'styled-components';

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  transition: .2s;
  & svg {
    margin-right: 4px;
  }
  &:active{
    transform: scale(.8);
  }
`;
export default Button;
