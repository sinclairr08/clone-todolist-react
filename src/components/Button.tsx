import styled from "styled-components";

export const RemoveBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 1px 8px;
  background-color: ${(props) => props.theme.componentColor};
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
`;

export const AddBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 1px 8px;
  margin-left: 10px;
  background-color: ${(props) => props.theme.componentColor};
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
`;
