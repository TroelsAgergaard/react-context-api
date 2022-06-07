import Kourtney from "../components/Kourtney";
import Article from "./Article";
import Wrapper from "./Wrapper";

const Main = ({ lastname }) => {
  return (
    <div>
      <Wrapper>
        <Kourtney lastname={lastname} />
        <Article lastname={lastname} />
      </Wrapper>
    </div>
  );
};

export default Main;
