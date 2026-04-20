import { useState } from "react";

export default function CheckDictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!word) return;
    // Mock check
    setResult({
      word: word,
      isValid: Math.random() > 0.5, // Randomly say valid or not for demo
    });
  };

  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <h1>Check Dictionary</h1>
          <p className="subtitle">
            <em>check if a word is valid in Scrabble dictionary or not.</em>{" "}
          </p>
        </div>

        <div className="main">
          <form className="tiny-form" onSubmit={handleCheck}>
            <label className="text-light">Enter a word to check</label>
            <div className="input-wrapper flex-default">
              <input
                type="text"
                placeholder="word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                required
              />
            </div>
            <div className="button-wrapper">
              <button type="submit" className="tiny-button button-primary">
                Check It
              </button>
            </div>
          </form>

          {result && (
            <div id="results-wrapper">
              <div className={`result ${result.isValid ? "success" : "error"}`}>
                <div className="list-wrapper">
                  <p style={{ fontSize: "1.5em", padding: "1em" }}>
                    <b>{result.word}</b> is {result.isValid ? "" : "NOT"} a valid word!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="desc">
          <p>
            This tool allows you to check if a word exists in the official Scrabble dictionaries (TWL or SOWPODS).
          </p>
        </div>
      </div>
    </div>
  );
}
