import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [flag, setFlag] = useState("Loading...");
  const [displayedFlag, setDisplayedFlag] = useState(flag);

  useEffect(() => {
    console.log("flag", flag);
    if (flag != "Loading...") {
      const count = 0;
      const total = flag.length;
      for (let i = 0; i < total; i++) {
        if (i === 0) {
          setDisplayedFlag([]);
        }
        setTimeout(() => {
          setDisplayedFlag((prev) => [...prev, flag[i]]);
        }, i * 500);
      }
      // console.log("displayedFlag", displayedFlag);
    }
  }, [flag]);


  //  https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/626f6e to get the text from body tag
  const url =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/626f6e";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      // console.log(data);
      setFlag(data);
    });

  return <div className="App">{displayedFlag}</div>;
}
