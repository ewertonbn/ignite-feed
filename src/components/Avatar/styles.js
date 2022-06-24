import styled from "styled-components";

export const AvatarImg = styled.img`
  width: ${(props) => props.hasBorder ? 'calc(3rem + 12px)' : '3rem'};
  height: ${(props) => props.hasBorder ? 'calc(3rem + 12px)' : '3rem'};
  border: ${(props) => props.hasBorder ? '4px solid var(--gray-800)' : ''};
  outline: ${(props) => props.hasBorder ? '2px solid var(--green-500)' : ''};
  border-radius: 8px;
`;