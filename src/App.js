import Wrapper from "./templates/Wrapper";
import Header from "./templates/Header";
import Main from "./templates/Main";
import Footer from "./templates/Footer";

function App() {
  const lastname = "Kardashian";
  return (
    <div className="App">
      <Wrapper>
        <Header lastname={lastname} />
        <Main lastname={lastname} />
        <Footer lastname={lastname} age={37}/>
      </Wrapper>
    </div>
  );
}

export default App;
