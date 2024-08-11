import { useState } from "react";

export const VoteFunctionCounter = () => {
  const [laughing, setLaughing] = useState(parseInt(localStorage.getItem("laughing")) || 0);
  const [smiling, setSmiling] = useState(parseInt(localStorage.getItem("smiling")) || 0);
  const [sunglasses, setSunglasses] = useState(parseInt(localStorage.getItem("sunglasses")) || 0);
  const [starstruck, setStarstruck] = useState(parseInt(localStorage.getItem("starstruck")) || 0);
  const [hearteyes, setHearteyes] = useState(parseInt(localStorage.getItem("hearteyes")) || 0);
  const [winner, setWinner] = useState(null);

  const handleVote = (emoji) => {
    const newCount = emoji === "laughing" ? laughing + 1
      : emoji === "smiling" ? smiling + 1
        : emoji === "sunglasses" ? sunglasses + 1
          : emoji === "starstruck" ? starstruck + 1
            : emoji === "hearteyes" ? hearteyes + 1
              : 0;
    localStorage.setItem(emoji, newCount);
    if (emoji === "laughing") {
      setLaughing(newCount);
    } else if (emoji === "smiling") {
      setSmiling(newCount);
    } else if (emoji === "sunglasses") {
      setSunglasses(newCount);
    } else if (emoji === "starstruck") {
      setStarstruck(newCount);
    } else if (emoji === "hearteyes") {
      setHearteyes(newCount);
    }
  };

  const showResults = () => {
    const emojiVotes = { laughing, smiling, sunglasses, starstruck, hearteyes };
    const winner = Object.keys(emojiVotes).reduce((a, b) => (emojiVotes[a] > emojiVotes[b] ? a : b));
    setWinner(winner);
  };

  const clearResults = () => {
    localStorage.clear();
    setLaughing(0);
    setSmiling(0);
    setSunglasses(0);
    setStarstruck(0);
    setHearteyes(0);
    setWinner(null);
  };

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
          <div key={emoji} className="emoji" onClick={() => handleVote(emoji)}>
            {emojiMap[emoji]} <span className="count">{emoji === "laughing" ? laughing
            : emoji === "smiling" ? smiling
              : emoji === "sunglasses" ? sunglasses
                : emoji === "starstruck" ? starstruck
                  : emoji === "hearteyes" ? hearteyes
                    : 0}</span>
          </div>
        ))}
        <button onClick={showResults}>Show Results</button>
        <button onClick={clearResults}>Clear</button>
        <div id="results">
          {winner ? `Winner: ${emojiMap[winner]} (Votes amount: ${emojiMap[winner]})` : ""}
        </div>
      </div>
    </div>
  );
};
