import "./index.css";
import Square from "./component/Square";

function App() {
  let squaresToRender = [];

  for (let index = 0; index < 5671; index++) {
    squaresToRender.push(<Square />);
  }

  return (
    <div className="App">
      <div className="squareContainer">
        {squaresToRender &&
          squaresToRender.map((item) => {
            return <>{item}</>;
          })}
      </div>
    </div>
  );
}

export default App;
