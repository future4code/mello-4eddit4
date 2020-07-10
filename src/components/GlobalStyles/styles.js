import styled from "styled-components";

// ========= GLOBAL

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
`;

// ========= POST PAGE (comentários)

export const CardComents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  width: 300px;
  height: 200px;
`;

// ========= FEED PAGE

export const CardPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  width: 300px;
  height: 150px;
  margin-top: 8px;

  header {
    border: solid 1px grey;
    width: 100%;
    text-align: center;
  }

  span {
    cursor: pointer;
  }
`;
