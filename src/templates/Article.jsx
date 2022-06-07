import Kim from "../components/Kim";

const Article = ({ lastname }) => {
  return (
    <article style={{ border: "solid 1px orange" }}>
      <Kim lastname={lastname} />
    </article>
  );
};

export default Article;
