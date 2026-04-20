import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [dictionary, setDictionary] = useState("twl");
  const [mustInclude, setMustInclude] = useState("");
  const [startsWith, setStartsWith] = useState("");
  const [endsWith, setEndsWith] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/result/${input}`);
  };

  return (
    <div className="container">
      <div className="content" id="scrollMarkerTop">
        <div className="title">
          <h1>Word Tool Platform</h1>
          <p className="subtitle">
            <em>simple, easy and fast word unscrambler!</em>{" "}
          </p>
        </div>
        <div className="main">
          <form className="tiny-form" id="mainForm" onSubmit={handleSearch}>
            <label htmlFor="ltrInput" className="text-light">
              Enter letters (max: 15, use ? or * for blank)
            </label>
            <div className="input-wrapper flex-default">
              <input
                type="text"
                name="letters"
                id="ltrInput"
                placeholder="tra"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength="15"
                autoFocus
                required
              />
            </div>
            <div className="button-wrapper">
              <button type="submit" className="tiny-button button-primary">
                Unscramble It
              </button>
              <button
                type="button"
                className="tiny-button"
                id="advButton"
                onClick={() => setShowOptions(!showOptions)}
              >
                Options
              </button>
            </div>

            {showOptions && (
              <div id="advancedOptions">
                <div className="flex-default">
                  <div className="option">
                    <label>Select Dictionary</label>
                    <select
                      name="dictionary"
                      id="dictCode"
                      value={dictionary}
                      onChange={(e) => setDictionary(e.target.value)}
                    >
                      <option value="twl">NWL - US/CA</option>
                      <option value="sowpods">CSW - UK</option>
                      <option value="enable">ENABLE</option>
                    </select>
                  </div>
                  <div className="option">
                    <label>Must include </label>
                    <input
                      type="text"
                      name="substr"
                      id="subStr"
                      placeholder="q"
                      value={mustInclude}
                      onChange={(e) => setMustInclude(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex-default">
                  <div className="option">
                    <label>Starts with </label>
                    <input
                      type="text"
                      name="prefix"
                      id="prefixLtr"
                      placeholder="prefix"
                      value={startsWith}
                      onChange={(e) => setStartsWith(e.target.value)}
                    />
                  </div>
                  <div className="option">
                    <label>Ends with </label>
                    <input
                      type="text"
                      name="suffix"
                      id="suffixLtr"
                      placeholder="suffix"
                      value={endsWith}
                      onChange={(e) => setEndsWith(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="desc">
          <div className="intro">
            <p>
              Word Unscrambler is a simple online tool for unscrambling and solving
              scrambled words, often useful in discovering top scoring words for
              Scrabble, Words with Friends, Wordle, Wordscapes, Wordfeud,
              TextTwist, Word Cookies, Anagrams etc.
            </p>
          </div>

          <h2>What is the use of Word Unscrambler?</h2>
          <p>
            When you’re stuck with some random letters, want to make words out of
            those scrambled letters? well, that’s what this website is designed
            for. Whether you need any help or just want to learn new words or
            perhaps you want to cheat a little :-), with such word games, this
            website will save your time and frustration often. Words games are
            going to be more fun if you have a well designed site like this one
            available at disposal. It also becomes easier to find answers for Word
            Cookies, Anagrams or Wordfeud if you use this site well. We also got a
            dedicated solver for Wordle if you like to play Wordle puzzles
            everyday.
          </p>
          <p>
            You can enter up to 12 letters (including two wild cards or blank
            tiles) and it shows you the valid words that can be made from the
            scrambled letters on board. Using this word helper tool, you will not
            only make yourself stronger against your opponent but also learn
            plenty of useful words and new combinations of letters, that would
            enrich your vocabulary as well (especially applicable to kids or
            learners or an enthusiast).
          </p>

          <h2>How to use advanced options?</h2>
          <p>
            You can change the dictionary if that’s applicable to the game you’re
            playing, otherwise leave it as it is. The default is TWL/OTCWL
            (official Scrabble dictionary for US/Canada/Thailand, based on the
            word list from NASPA). The other supported dictionary is SOWPODS (for
            UK and all, based on word list from CSW).
          </p>
          <p>
            When you click on 'Options' button, you will see these options. You
            can filter results by using “Starts with” or “End with” or “Must
            include” option. Please use this feature carefully otherwise this
            will not return any valid words at all. For words greater than 5
            letters or when using wildcards it’s quite useful. This is reset with
            every search, however dctionary preference is saved for subsequent
            uses.
          </p>

          <h2>How does this work ?</h2>
          <p>
            It's very simple and easy, certainly fun to use. Lets say, you got
            these letters at your hand : <b>shirkequl</b>. If you got a blank
            tile, then append <i>?</i> in input box. Want to use advanced options
            or change the dictionary? well, you're free to use that otherwise hit
            the Unscramble button and let this site do the heavy work for you!
            Here are the results for above search :{" "}
          </p>
          <ul>
            <li>
              <i>8 letter words</i>: rushlike
            </li>
            <li>
              <i>7 letter words</i>: hulkier, huskier etc
            </li>
            <li>
              <i>6 letter words</i>: shrike, hikers, quirks, squire, lusher, relish
              etc
            </li>
            <li>
              <i>5 letter words</i>: hiker, hikes, skier, shirk, hurls, lures, liers
              etc
            </li>
            <li>
              <i>4 letter words</i>: hike, risk, rise, heir, rule, rush, rusk, slur,
              sure, silk, sukh etc
            </li>
            <li>
              <i>3 letter words</i>: her, his, ski, hie, qis, sir, lie etc
            </li>
            <li>
              <i>2 letter words</i>: hi, sh, is, er, qi etc
            </li>
          </ul>
          <p>
            <strong>Tip</strong> : If the total no of words returned are too high,
            you can specify prefix or/both suffix using advanced options, to get
            more specific words you’re looking for.
          </p>

          <div className="notice">
            <p>
              <b>Note</b>: Feel free to send us any feedback or report on the new
              look of our site. Thank you for visiting our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
