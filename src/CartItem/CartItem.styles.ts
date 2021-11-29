import { CartItemType } from "./../App";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    jsutify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
