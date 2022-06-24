import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: var(--gray-800);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;

  img {
    height: 3rem;
    margin-right: 1rem;
  }

  strong {
    font-size: 1.25rem;
  }
`;