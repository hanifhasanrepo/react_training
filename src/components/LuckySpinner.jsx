import { useState } from "react";
import "../css/LuckySpinner.css";

function LuckySpinner() {
  const prizes = ["RM 10", "RM 20", "Try Again", "RM 50", "Gift", "RM 100"];

  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult("");

    const randomIndex = Math.floor(Math.random() * prizes.length);

    const segmentAngle = 360 / prizes.length;

    // Example:
    // RM10 = 30°
    // RM20 = 90°
    // Try Again = 150°
    // RM50 = 210°
    // Gift = 270°
    // RM100 = 330°
    const selectedCenterAngle = randomIndex * segmentAngle + segmentAngle / 2;

    // Pointer is located at 12 o'clock
    const targetAngle = 360 - selectedCenterAngle;

    const currentRotation = rotation % 360;

    let difference = targetAngle - currentRotation;

    if (difference < 0) {
      difference += 360;
    }

    const newRotation = rotation + 360 * 5 + difference;

    setRotation(newRotation);

    setTimeout(() => {
      setResult(prizes[randomIndex]);
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="spinner-page">
      <div className="spinner-card">
        <h1>🎁 Lucky Spinner</h1>

        <p>Spin the wheel and try your luck!</p>

        <div className="wheel-container">
          <div className="pointer">▼</div>

          <div
            className="wheel"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="wheel-text text-1">RM 10</div>
            <div className="wheel-text text-2">RM 20</div>
            <div className="wheel-text text-3">Try Again</div>
            <div className="wheel-text text-4">RM 50</div>
            <div className="wheel-text text-5">Gift</div>
            <div className="wheel-text text-6">RM 100</div>
          </div>
        </div>

        <button className="spin-button" onClick={spinWheel} disabled={spinning}>
          {spinning ? "Spinning..." : "SPIN"}
        </button>

        {result && (
          <div className="result">
            🎉 You won: <strong>{result}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default LuckySpinner;
