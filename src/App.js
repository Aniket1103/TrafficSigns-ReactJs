import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [meaning, setMeaning] = useState("");
  var [userInput, setUserInput] = useState("");

  var emojiDictionary = {
    "⚠️": "Warning",
    "🚸": "Children Crossing",
    "⛔": "No Entry",
    "🚫": "Prohibited",
    "🚳": "No Bicycles",
    "🚭": "No Smoking",
    "🚯": "No Littering",
    "🚱": "Non-Potable Water",
    "🚷": "No Pedestrians",
    "📵": "No Mobile Phones",
    "☢": "Radioactive",
    "☣": "Biohazard"
  };
  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (event.target.value === "") {
    } else if (meaning === undefined) {
      meaning = "We don't have this value in our database";
      //console.log(event.target.value);
      setMeaning(meaning);
      setUserInput("");
    } else {
      //console.log("meaning: ", meaning);
      setMeaning(meaning);
      setUserInput(event.target.value);
    }
  }

  function emojiClickHandler(item) {
    //var meaning = emojiDictionary[item];
    //console.log("Meaning: ", meaning);
    setMeaning(emojiDictionary[item]);
    setUserInput(item);
  }

  //console.log(userInput);
  return (
    <div className="App">
      <h1>Traffic Signs</h1>

      <input onChange={emojiInputHandler} />

      <div id="meaning">
        {userInput} {meaning}
      </div>

      <div>
        {Object.keys(emojiDictionary).map((item, index) => {
          return (
            <span
              className="signs-display"
              onClick={() => emojiClickHandler(item)}
              key={item}
              style={{
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
