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
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Title2 = styled.Text`
  font-family: "montserrat-regular";
  font-size: 16px;
  font-weight: 500;
  color: palevioletred;
  padding: 20px;
`;

const BorderBottom = styled.View`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
`;

const Paragraph = styled.Text`
  margin-left: 8px;
  margin-right: 8px;
  line-height: 20px;
`;

module.exports = { Container, BorderBottom, Title1, Title2, Paragraph };
