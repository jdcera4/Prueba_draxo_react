import styled from 'styled-components';

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1.5rem;
  margin-left: 10.5rem;
  margin-bottom: 1%;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;