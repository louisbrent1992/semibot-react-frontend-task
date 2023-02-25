import styled from "styled-components";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
`;

function App() {
  return (
    <Container>
      <header>
        <NavBar />
      </header>
      <section>
        <SearchBar />
      </section>
      <section>
        {/* Filter panel to allow user to filter items by one or more criteria */}
      </section>
      <Footer />
    </Container>
  );
}

export default App;
