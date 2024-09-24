import logo from "./logo.svg";
import "./App.css";
import { VoteClassCounter } from "./voteClassCounter";
import { VoteFunctionCounter } from "./voteFunctionCounter";

function App() {
  return (
    <div className="App">
      <VoteClassCounter/>
      <VoteFunctionCounter/>
    </div>
  );
}

export default App;
