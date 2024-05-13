import "./App.css";
import Postcard from "./component/Postcard";
import posts from "./posts";

const pArray = posts.map((pro) => {
  return (
    <Postcard
      imgSo={pro.image}
      likeSo={pro.likes}
      nameSo={pro.title}
      desSo={pro.description}
    />
  );
});
function App() {
  return (
    <div>
      <h1>My cool instagram clone</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "5px",
          flexWrap: "wrap",
          gap: "5px",
        }}
      >
        {pArray}
      </div>
    </div>
  );
}

export default App;
