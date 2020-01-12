import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title1 = styled.Text`
  font-family: "montserrat-semi-bold";
  font-size: 24px;
  font-weight: 500;
  color: palevioletred;
`;

const Paragraph = styled.Text`
  margin-left: 8px;
  margin-right: 8px;
  line-height: 20px;
`;

module.exports = { Container, Title1, Paragraph };
