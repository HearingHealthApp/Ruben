import React, { useRef, useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Listener.css";
import apiClient from "../../services/apiClient";

const Listener = () => {
  const [decibels, setDecibels] = useState([0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGeneratedNumber, setLastGeneratedNumber] = useState(null);
  const [average, setAverage] = useState(0);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 60);
  };

  const generatorButtonClicked = () => {
    // Set the recorded decibels array to an empty array each time the button is clicked
    setIsGenerating(true);
    setAverage(0);
    setDecibels([0]);
    setAverageData([{ time: 0, value: 0 }]);
    setDecibelsData([{ time: 0, value: 0 }]);

    const interval = setInterval(() => {
      const randomNumber = generateRandomNumber();
      setDecibels((prevNums) => [...prevNums, randomNumber]);
      setLastGeneratedNumber(randomNumber);
    }, 500);

    setTimeout(() => {
      setIsGenerating(false);
      setAverage(
        Math.ceil(decibels.reduce((sum, num) => sum + num, 0) / decibels.length)
      );
      clearInterval(interval); // Clear the interval after 10 seconds
    }, 10000); // Stop after 10 seconds
  };

  useEffect(() => {
    setAverage(
      Math.ceil(decibels.reduce((sum, num) => sum + num, 0) / decibels.length)
    );
    setDecibelsData((prevData) => [
      ...prevData,
      {
        time: new Date(timestamp).toLocaleString(),
        value: decibels[decibels.length - 1],
      },
    ]);
    setAverageData((prevData) => [
      ...prevData,
      { time: new Date(timestamp).toLocaleString(), value: average },
    ]);
  }, [decibels, average]);

  // Add two state variables to store data for the charts
  const [decibelsData, setDecibelsData] = useState([{ time: 0, value: 0 }]);
  const [averageData, setAverageData] = useState([{ time: 0, value: 0 }]);

  // Add state variables to keep track of timestamp and time interval
  const [timestamp, setTimestamp] = useState(Date.now());

  return (
    <div className="whole-container">
      <div>
        <div className="inner-container">
          <div className="soundsense-blurb-bigger-container">
            <div className="soundsense-all-text">
              <h1 id="soundsense-text">SoundSense</h1>
              <p id="soundsense-paragraph">
                Experience the power of "SoundSense" - our listening tool that
                transforms the way you engage with sound. With SoundSense, you
                gain real-time insights into the decibel levels surrounding you.
                By utilizing your device's microphone, SoundSense captures live
                data on sound intensity and presents it through a dynamic gauge
                for instant feedback. Stay informed with our 10-second averaging
                feature, providing accurate assessments of the overall noise
                level. The user-friendly interface offers color-coded indicators
                for easy visual alerts, ensuring you're always in the know about
                your acoustic environment. Enjoy personalized settings, access
                to data history, and the assurance of complete privacy, as
                SoundSense operates solely on your device. Embrace the power of
                our listening tool and take control of your auditory experience
                with SoundSense!
              </p>
            </div>
            <div className="decibel-button">
              {/* conditionally rendering the button */}
              {!isGenerating ? (
                <button
                  className="listener-button"
                  onClick={generatorButtonClicked}
                >
                  Start SoundSense Session
                </button>
              ) : (
                <p className="listening-loading">Listening...</p>
              )}
            </div>
          </div>
          <div className="graphs-parent">
            <div className="graphs">
              <h1 className="graphs-title">Decibel Statistics</h1>
              {lastGeneratedNumber !== null && (
                <h2>Current Decibel : {lastGeneratedNumber} dB</h2>
              )}

              <LineChart data={decibelsData} width={800} height={300}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                  label={{
                    value: "Current Decibel",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <XAxis dataKey="time" stroke="white" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Current Decibel"
                  stroke="blue"
                />
              </LineChart>

              {average !== 0 && <h2>Average decibel : {average} dB</h2>}

              <LineChart
                data={averageData}
                width={800}
                height={300}
                stroke="white"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                  label={{
                    value: "Average",
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <XAxis dataKey="time" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Average"
                  stroke="green"
                />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listener;
