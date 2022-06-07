import Wrapper from "./templates/Wrapper";
import Header from "./templates/Header";
import Main from "./templates/Main";
import Footer from "./templates/Footer";
import NameContext from "./context/context";

function App() {
  const lastname = "Kardashian";
  return (
    <div className="App">
      {/* <NameContext.Provider value=""> */}
      <Wrapper>
        <Header lastname={lastname} />
        <Main lastname={lastname} />
        <Footer lastname={lastname} />
      </Wrapper>
      {/* </NameContext.Provider> */}
    </div>
  );
}

export default App;
