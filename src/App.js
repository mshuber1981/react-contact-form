import React from "react";
import { ThemeProvider } from "styled-components";
// Components
import { Container } from "react-bootstrap";
import GlobalStyles from "./components/GlobalStyles";
import { Title } from "./components/Title";
import ContactForm from "./components/ContactForm";

const apiUrl = process.env.REACT_APP_API_Gateway_URL;
const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themes = {
  light: {
    name: "light",
    color: "#45413C",
    background: "#F5F2E8",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(
    function () {
      darkMode ? setTheme("dark") : setTheme("light");
    },
    [theme]
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <main className="d-flex flex-column vh-100 align-items-center justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <ContactForm apiUrl={apiUrl} theme={themes[theme]} />
        </Container>
      </main>
    </ThemeProvider>
  );
}
