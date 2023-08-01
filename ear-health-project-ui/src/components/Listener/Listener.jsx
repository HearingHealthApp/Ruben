import React, { useRef, useState, useEffect } from "react";

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

    const interval = setInterval(() => {
      const randomNumber = generateRandomNumber();
      setDecibels((prevNums) => [...prevNums, randomNumber]);
      setLastGeneratedNumber(randomNumber);
    }, 500); // Generate every second (1000 milliseconds)

    setTimeout(() => {
      setIsGenerating(false);
      setDecibels([0])
      clearInterval(interval); // Clear the interval after 10 seconds
    }, 10000); // Stop after 10 seconds
  };

  useEffect(() => {
    setAverage(decibels.reduce((sum, num) => sum + num, 0) / decibels.length)
  }, [decibels]);

  console.log(decibels)


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

      {lastGeneratedNumber !== null && (
        <h1>Current Decibel : {lastGeneratedNumber}</h1>
      )}
      {average !== 0 && <h1>Average : {average}</h1>}
    </div>
  );
};

export default Listener;
