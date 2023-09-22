import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  justify-items: stretch;
`;

export const Card = styled.View`
  flex: 1;
  margin: 10px 2px 20px;
  max-width: 33%;
  max-height: 10%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-color: red;
  border-width: 1em;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Text = styled.Text`
  color: blue;
`;
