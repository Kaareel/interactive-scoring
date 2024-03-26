import { useState } from "react";
import Scoring from "./views/Scoring";
import Thanks from "./views/Thanks";

type Scoring = "scoring" | "thanks";

function App() {
  const [score, setScore] = useState(0);
  const [view, setView] = useState<Scoring>("scoring");
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const saveScore = (currentScore: number) => {
    setScore(currentScore);
    setView("thanks");
  };

  return (
    <div>
      {view === "scoring" && <Scoring saveScore={saveScore} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />}
      {view === "thanks" && <Thanks score={score} />}
    </div>
  );
}

export default App;
