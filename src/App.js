import { useContext, useState } from "react";
import Wrapper from "./templates/Wrapper";
import Header from "./templates/Header";
import Main from "./templates/Main";
import Footer from "./templates/Footer";
import NameContext from "./context/context";

function App() {
  const [ lastName, setLastName ] = useState();
  return (
    <div className="App">
      <Header />
      <NameContext.Provider value={{ lastName, setLastName }}>
        <Wrapper>
          <Main />
          <Footer />
        </Wrapper>
      </NameContext.Provider>
    </div>
  );
}

export default App;
