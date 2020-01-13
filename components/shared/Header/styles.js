import styled from "styled-components";

const HeaderContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 20;
  color: #333;
  letter-spacing: 1;
`;

module.exports = { HeaderContainer, HeaderText };
