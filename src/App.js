import { useContext, useState } from "react";
import Wrapper from "./templates/Wrapper";
import Header from "./templates/Header";
import Main from "./templates/Main";
import Footer from "./templates/Footer";
import NameContext from "./context/context";

function App() {
  const [lastname, setLastname] = useState();
  return (
    <div className="App">
      <Header />
      <NameContext.Provider value={lastname}>
        <Wrapper>
          <Main />
          <Footer />
        </Wrapper>
        <input
          style={{ marginTop: "25px" }}
          type="text"
          onChange={(e) => setLastname(e.target.value)}
        />
      </NameContext.Provider>
    </div>
  );
}

export default App;
