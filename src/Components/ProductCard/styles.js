import styled from "styled-components";

export const Figure = styled.figure`
  background-color: #fff;
  border: thin #c0c0c0 solid;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  max-width: 250px;
  margin: auto;

img {
  width: 250px;
  height: 250px;
  object-fit: contain;
}

figcaption {
  color: #000;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  min-height: 80px;
  padding: 3px;
  text-align: center;
}

mark {
  background-color: transparent;
  color: darkgreen;
  margin-bottom: 10px;
}
`;