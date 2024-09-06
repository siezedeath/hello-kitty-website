import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // For scroll animations
import { Typewriter } from 'react-simple-typewriter';
import Drum from './Drum'; // Import the Drum component
import './App.css'; // Import the CSS styles for the flower and drum

function App() {
  const messages = [
    "happy 6 months, my love :)",
    "i love you infinity",
    "i miss you all the time",
    "you are my ride or die",
    "you are my best friend",
  ];

  // Array of songs for the queue
  const songs = [
    '/audio/song1.mp3',
    '/audio/song2.mp3',
    '/audio/song3.mp3'
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);  // Current song index
  const [isPlaying, setIsPlaying] = useState(false);  // Track if the audio is playing
  const [showSurprise, setShowSurprise] = useState(false); // Track if the surprise is shown
  const [showScrollMessage, setShowScrollMessage] = useState(false); // Show the scroll message
  const audioRef = useRef(null);

  // When the song ends, play the next one
  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // Set up the audio source when the current song changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = songs[currentSongIndex];
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          console.log("Playback prevented. User interaction needed.");
        });
      }
    }
  }, [currentSongIndex, isPlaying, songs]);

  // Handle play/pause functionality
  const handlePlayPause = () => {
    if (!isPlaying) {
      audioRef.current.play().catch(() => {
        console.log("Playback prevented. User interaction needed.");
      });
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle drum click to reveal the surprise
  const handleDrumClick = () => {
    setShowSurprise(true); // Reveal the surprise on drum click
  };

  return (
    <div className="bg-hello-kitty-pink relative">
    {/* Add the shooting hearts section here */}
      {/* Flower Animations */}
      <motion.div className="flower absolute top-1/3 left-10" initial="hidden" animate="visible">
        <div className="petal petal-1"></div>
        <div className="petal petal-2"></div>
        <div className="petal petal-3"></div>
        <div className="petal petal-4"></div>
        <div className="center"></div>
      </motion.div>
      
      <motion.div className="flower absolute top-1/3 right-10" initial="hidden" animate="visible">
        <div className="petal petal-1"></div>
        <div className="petal petal-2"></div>
        <div className="petal petal-3"></div>
        <div className="petal petal-4"></div>
        <div className="center"></div>
      </motion.div>

      {/* Section 1: Opening Message */}
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Triggers fade when 10% of the section is in view
      >
        <h1 className="text-5xl font-heading text-hello-kitty-red">
          <Typewriter
            words={messages}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <button onClick={handlePlayPause} className="bg-hello-kitty-red text-white px-4 py-2 rounded-lg mt-4">
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>

        <audio ref={audioRef} onEnded={handleSongEnd} controls={false} />

        <img src="/images/hellokitty.png" className="w-1/2 my-8" alt="Hello Kitty" />
        <p className="text-lg font-body text-hello-kitty-gray">
          this is the "project" that i could not let you peep on my computer, i hope you like it!
        </p>
      </motion.div>

      {/* Section 2: Photo Grid */}
      <motion.div
        className="min-h-screen bg-hello-kitty-pink flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Fades in when 10% of the section is in view
      >
        <h2 className="text-4xl font-heading text-hello-kitty-red mb-8">some pics :)</h2>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
          <div className="relative">
            <img src="/images/photo1.jpg" alt="Photo 1" className="w-full rounded-lg shadow-lg" />
            <p className="absolute bottom-4 left-4 text-white bg-hello-kitty-red p-2 rounded-lg opacity-90">u in pretty desi clothes (✿◠‿◠)</p>
          </div>
          <div className="relative">
            <img src="/images/photo2.jpg" alt="Photo 2" className="w-full rounded-lg shadow-lg" />
            <p className="absolute bottom-4 left-4 text-white bg-hello-kitty-red p-2 rounded-lg opacity-90">us out for steak (▰˘◡˘▰)</p>
          </div>
          <div className="relative">
            <img src="/images/photo3.jpg" alt="Photo 3" className="w-full rounded-lg shadow-lg" />
            <p className="absolute bottom-4 left-4 text-white bg-hello-kitty-red p-2 rounded-lg opacity-90">u lookin gorgeous asf (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
          </div>
          <div className="relative">
            <img src="/images/photo4.jpg" alt="Photo 4" className="w-full rounded-lg shadow-lg" />
            <p className="absolute bottom-4 left-4 text-white bg-hello-kitty-red p-2 rounded-lg opacity-90">us with kitty ＼（＾○＾）人（＾○＾）／</p>
          </div>
        </div>
      </motion.div>

      {/* Section 3: Drum Animation */}
      <section>
        <h2 className="text-xl text-center mb-4">Click the drum for a surprise!</h2>
        <Drum onClick={handleDrumClick} />

        {/* Reveal the surprise image on drum click */}
        {showSurprise && (
          <div className="surprise">
            <div className="tickets-grid">
              <img
                src="/images/dontoliver-tickets.png"
                alt="Don Toliver Tickets"
                className="surprise-image"
              />
              <img
                src="/images/dontoliver-tickets1.png"
                alt="Don Toliver Tickets"
                className="surprise-image-1"
              />
            </div>
            {showSurprise && (
              <div className="surprise">
                <div className="trio-images-grid">
                  <img
                    src="/images/trio1.jpg"
                    alt="Trio Image 1"
                    className="trio-image"
                  />
                  <img
                    src="/images/trio2.jpg"
                    alt="Trio Image 2"
                    className="trio-image"
                  />
                </div>
                <p className="surprise-text">you and your two most favorite people in the world are about to get lit</p>
              </div>
            )}

          </div>
        )}
      </section>
    </div>
  );
}

export default App;
