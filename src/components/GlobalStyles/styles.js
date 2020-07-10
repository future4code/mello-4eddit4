import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// ========= CSS RESET
export const ResetCSS = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

// ========= GLOBAL

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

// ========= LOGIN PAGE

export const CardLogin = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  height: 300px;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  input {
    height: 48px;
    width: 280px;
    margin: 8px;
    padding: 22px 12px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  input:focus::placeholder {
    transform: translateY(-14px);
    visibility: visible !important;
    font-size: 10px;
  }
  button:nth-child(odd) {
    height: 35px;
    width: 280px;
    margin: 8px;
    padding: 16px 0 28px;
    background: #0079d3;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  div {
    width: 90%;

    display: flex;
    justify-content: flex-end;
  }
  span {
    font-size: 10px;
    margin-right: 8px;
    text-decoration: none;
  }
  button {
    border: none;
    background: #fff;
    color: #0079d3;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover:nth-child(odd) {
    background: #0079f8;
  }
`;

// ========= REGISTER PAGE

export const CardRegister = styled.div`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  input {
    height: 48px;
    width: 280px;
    margin: 8px;
    padding: 22px 12px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  input:focus::placeholder {
    transform: translateY(-14px);
    visibility: visible !important;
    font-size: 10px;
  }
  button {
    height: 35px;
    width: 280px;
    margin: 8px;
    padding: 16px 0 28px;
    background: #0079d3;
    color: #fff;
    font-size: 16px;
    font-weight: bold;

    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  button:hover {
    background: #0079f8;
  }
`;

// ========= FEED PAGE

export const CardInput = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 375px;
  margin: 8px;

  display: flex;
  justify-content: center;
  input {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px;
    margin: 8px;
    border-radius: 4px;
  }
  button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #0079d3;
    padding: 8px;
    margin: 8px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
  }
  button:hover {
    background: #0079f8;
  }
`;

export const CardPost = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 375px;
  margin: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  header {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 30px;
    text-align: center;
  }

  section {
    height: 400px;
  }
  input {
    padding: 8px;
    margin: 8px;
  }
  button {
    padding: 8px;
    margin: 8px;
  }
`;

export const Footer = styled.footer`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 30px;
  width: 375px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    align-items: center;
    text-align: center;
    padding: 8px;
    border: solid red 1px;
  }
  span:first-child() {
    color: red;
  }
  button {
    width: 20px;
    height: 20px;
    padding: 8px;
    margin: 8px;
    cursor: pointer;
  }
`;

// ========= POST PAGE (comentários)

export const CardComents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  width: 300px;
  height: 100px;
`;
