import ContactForm from "./assets/containers/ContactForm";

// API Gateway Contact Form endpoint
const apiUrl = "Your API URL";

const App = () => {
  return (
    <main>
      <ContactForm apiUrl={apiUrl} />
    </main>
  );
};

export default App;
