import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: white;
    padding: 0;
    margin: 0;
  }

  p {
    color: black;
  }

  // anything else you would like to include
`;

export default function LayoutDefault({ children }: { children: any }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}
