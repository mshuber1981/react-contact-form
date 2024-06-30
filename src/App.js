import React from "react";
// Styles
import { ThemeProvider } from "styled-components";
// Components
import { Container } from "react-bootstrap";
import GlobalStyles from "./components/GlobalStyles";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";

const apiUrl = process.env.REACT_APP_API_Gateway_URL;
// const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const themes = {
//   light: {
//     name: "light",
//     color: "#45413C",
//     background: "#F5F2E8",
//   },
//   dark: {
//     name: "dark",
//     color: "#FBFDFF",
//     background: "#27272A",
//   },
// };

export default function App() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
    }
  }, [theme]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
    );

  return (
    <ThemeProvider theme={{ name: theme }}>
      <GlobalStyles />
      <main className="d-flex flex-column vh-100 align-items-center justify-content-center">
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Contact Me"} />
        </Container>
        <Container>
          <ContactForm apiUrl={apiUrl} theme={theme} />
        </Container>
      </main>
    </ThemeProvider>
  );
}
