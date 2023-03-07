import styled from "styled-components";

export const CardStyle = styled.div`
  .MuiCardContent-root {
    text-align: center;
  }
`;

export const CardImageStyle = styled.div`
  background-color: ${(props) => props.color};

  .MuiCardMedia-img {
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: top center;
    display: block;
    margin: auto;
  }
`;
