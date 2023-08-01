import React, { useRef, useState } from "react";

const Listener = () => {
  const [decibels, setDecibels] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGeneratedNumber, setLastGeneratedNumber] = useState(null)
  const [average, setAverage] = useState(null)

  const generateRandomNumber = () => {
    return Math.floor((Math.random() * 100) + 60);
  };

  const generatorButtonClicked = () => {
    setDecibels([]); // Set the recorded decibels array to an empty array each time the button is clicked
    setIsGenerating(true);
    setAverage(null)

    const interval = setInterval(() => {
      const randomNumber = generateRandomNumber()
      setDecibels((prevNums) => [...prevNums, randomNumber]);
      setLastGeneratedNumber(randomNumber);
    }, 500); // Generate every second (1000 milliseconds)

    setTimeout(() => {
      setIsGenerating(false);
      setAverage(decibels.reduce((sum, num) => sum + num, 0) / decibels.length)
      clearInterval(interval); // Clear the interval after 10 seconds
    }, 10000); // Stop after 10 seconds
  };

  console.log(decibels);
  console.log(average)
  console.log(isGenerating);

  const calculateAverage = () => {
    if (decibels.length > 0) {
      const total = decibels.reduce((sum, num) => sum + num, 0);
      const avg = total / decibels.length;
      return avg.toFixed(2);
    }
    return 0;
  };

  return (
    <div>
      <h1>SoundSense</h1>
      <p>
        Experience the power of "SoundSense" - our listening tool that
        transforms the way you engage with sound. With SoundSense, you gain
        real-time insights into the decibel levels surrounding you. By utilizing
        your device's microphone, SoundSense captures live data on sound
        intensity and presents it through a dynamic gauge for instant feedback.
        Stay informed with our 10-second averaging feature, providing accurate
        assessments of the overall noise level. The user-friendly interface
        offers color-coded indicators for easy visual alerts, ensuring you're
        always in the know about your acoustic environment. Enjoy personalized
        settings, access to data history, and the assurance of complete privacy,
        as SoundSense operates solely on your device. Embrace the power of our
        listening tool and take control of your auditory experience with
        SoundSense!
      </p>
      {!isGenerating ? (
        <button onClick={generatorButtonClicked}>
          Start SoundSense Session
        </button>
      ) : (
        <p>Listening....</p>
      )}

{lastGeneratedNumber !== null && <h1>Current Decibel : {lastGeneratedNumber}</h1>}
{average !== null && <h1>Average : {average}</h1>}
   

    </div>
  );
};

export default Listener;
