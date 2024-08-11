import { Component } from "react";

export class VoteClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laughing : parseInt(localStorage.getItem("laughing")) || 0,
      smiling : parseInt(localStorage.getItem("smiling")) || 0,
      sunglasses : parseInt(localStorage.getItem("sunglasses")) || 0,
      starstruck : parseInt(localStorage.getItem("starstruck")) || 0,
      hearteyes : parseInt(localStorage.getItem("hearteyes")) || 0,
      winner : null,
    };
  }

  handleVote = (emoji) => {
    this.setState((prevState) => {
      const newCount = prevState[emoji] + 1;
      localStorage.setItem(emoji, newCount);
      return { [emoji] : newCount };
    });
  };

  showResults = () => {
    const { laughing, smiling, sunglasses, starstruck, hearteyes } = this.state;
    const emojiVotes = { laughing, smiling, sunglasses, starstruck, hearteyes };
    const winner = Object.keys(emojiVotes).reduce((a, b) => (emojiVotes[a] > emojiVotes[b] ? a : b));
    this.setState({ winner });
  };

  clearResults = () => {
    localStorage.clear();
    this.setState({
      laughing : 0,
      smiling : 0,
      sunglasses : 0,
      starstruck : 0,
      hearteyes : 0,
      winner : null,
    });
  };

  render() {
    const { laughing, smiling, sunglasses, starstruck, hearteyes, winner } = this.state;
    const emojiMap = {
      laughing : "😂",
      smiling : "😊",
      sunglasses : "😎",
      starstruck : "🤩",
      hearteyes : "😍",
    };

    return (
      <div>
        <div className="emoji-container">
          {Object.keys(emojiMap).map((emoji) => (
            <div key={emoji} className="emoji" onClick={() => this.handleVote(emoji)}>
              {emojiMap[emoji]} <span className="count">{this.state[emoji]}</span>
            </div>
          ))}
        </div>
        <button onClick={this.showResults}>Show Results</button>
        <button onClick={this.clearResults}>Clear</button>
        <h2>Results</h2>
        <div id="results">
          {winner ? `Winner: ${emojiMap[winner]} (Votes amount: ${this.state[winner]})` : ""}
        </div>
      </div>
    );
  }
}

