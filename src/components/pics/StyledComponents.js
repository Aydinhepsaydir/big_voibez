import styled from "styled-components"

export const PicsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

export const PicsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 400px;

  &.test {
    margin: 8px;
  }
`;

export const imgStyles = {
  margin: "8px",
  zIndex: "-2"
}