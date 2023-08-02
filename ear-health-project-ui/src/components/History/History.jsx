import React, {useState, useEffect} from "react";
import "./History.css";

const History = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Set isLoaded to true after the component mounts
  }, []);

  return (
    <div>
    <div id="wrapper">
    <h1 id = 'title'>RUBEN'S STORY</h1>
      <div id = "hello">
      <div id="parent" className={isLoaded ? 'loaded' : ''}>
        <h1 id="child">Protect your ears,</h1>
        <h1 id="child">embrace the world,</h1>
        <h1 id="child">and keep on living.</h1>
      </div>
      </div>
      
      <div id = 'undertext' className={isLoaded ? 'loaded' : ''}>
        <p id = "childp">
        You know, man, it's been a real rollercoaster, like seriously, wild
        stuff. Losing my hearing was a total curveball, and I was like, "Nah,
        this can't be happening," trying everything to get back what I had. But
        damn, life had other plans. The silence hit me like a ton of bricks, and
        I felt so damn disconnected, like an island in the middle of nowhere. I
        was desperate for a quick fix, but reality slapped me hard in the face.
        No easy way out, bro. I was lost, drowning in my own fears and doubts,
        but you know what? Slowly, I started seeing a flicker of hope. It was
        during those dark days that I stumbled upon this awesome online
        community, a place where folks were facing similar struggles. They had
        been through what I was going through, and they reached out like a
        lifeline. I found solace in their stories, man. It's like we were
        speaking the same language, even if our ears couldn't hear it. They
        showed me that I wasn't alone, and that, bro, that was a game-changer.
        These people became my virtual family, you know? We shared our
        frustrations, our triumphs, and everything in between. They understood
        me in a way nobody else could. They didn't treat me like some broken
        dude, but like a fellow human, trying to find his footing in this noisy
        world. It gave me hope and the strength to keep pushing through. So,
        while life may have thrown me a wicked curveball, this community, man,
        it's like my secret weapon. When I log in and see all these messages
        from people who truly get it, it's like a warm embrace, reminding me
        that I can keep on grooving, no matter what life throws at me. Gotta
        roll with the punches, my friend. Embrace the silence, dance to a new
        beat, and keep on living, loving, and rockin' on.
      </p>
      </div>
    </div>
    </div>
  );
};

export default History;
