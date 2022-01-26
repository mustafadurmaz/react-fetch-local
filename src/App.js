import "./styles.css";
import Data from "./data.json";
import Inform from "./component/Inform";

export default function App() {
  return (
    <div className="App">
      <Inform data={Data} />
    </div>
  );
}
