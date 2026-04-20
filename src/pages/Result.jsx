import { useParams, Link } from "react-router-dom";
import { wordList } from "../utils/wordList";

export default function Result() {
  const { letters } = useParams();

  // Basic unscramble logic for demonstration
  const unscramble = (input) => {
    const counts = {};
    for (let char of input.toLowerCase()) {
      counts[char] = (counts[char] || 0) + 1;
    }

    return wordList.filter((word) => {
      const wordCounts = {};
      for (let char of word.toLowerCase()) {
        wordCounts[char] = (wordCounts[char] || 0) + 1;
      }
      for (let char in wordCounts) {
        if (!counts[char] || wordCounts[char] > counts[char]) {
          return false;
        }
      }
      return true;
    });
  };

  const results = unscramble(letters);
  const groupedResults = results.reduce((acc, word) => {
    const len = word.length;
    if (!acc[len]) acc[len] = [];
    acc[len].push(word);
    return acc;
  }, {});

  const sortedLengths = Object.keys(groupedResults).sort((a, b) => b - a);

  return (
    <div className="container">
      <div className="content">
        <div className="title">
          <h1>Words made with {letters}</h1>
        </div>

        <div id="results-wrapper">
          <div className="summary">
            <p>
              Found {results.length} words by unscrambling the letters <b>{letters}</b>.
            </p>
          </div>

          {sortedLengths.length > 0 ? (
            sortedLengths.map((len) => (
              <div className="result" key={len}>
                <h3>{len} Letter Words</h3>
                <div className="list-wrapper">
                  <ul>
                    {groupedResults[len].map((word) => (
                      <li key={word}>
                        <a href={`https://wordunscrambler.me/meaning/${word}`} target="_blank" rel="noreferrer">
                          {word}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="result error">
              <p>Sorry, no words found for "{letters}".</p>
            </div>
          )}
        </div>

        <div className="desc">
            <p style={{marginTop: '2em'}}>
                <Link to="/" className="tiny-button button-primary">Back to Home</Link>
            </p>
        </div>
      </div>
    </div>
  );
}
