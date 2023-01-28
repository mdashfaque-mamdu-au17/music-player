import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React from 'react';
import CurrentSong from './CurrentSong';

const Player = ({ trackIndex, setTrackIndex, songs }) => {
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? songs.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < songs.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <div className="lg:flex lg:items-center lg:gap-20  xl:gap-[150px] lg:justify-start">
      <div className="lg:pl-[22px] lg:py-5">
        <div className="hidden lg:block lg:w-64">
          <CurrentSong
            singerName={songs[trackIndex]?.singerName}
            songName={songs[trackIndex]?.songName}
            imageSrc={songs[trackIndex]?.image}
          />
        </div>
      </div>

      {/* Player */}
      <div className="relative lg:static w-full lg:w-[450px] xl:w-[600px] 2xl:w-[837px]  lg:h-[75px]">
        {songs[trackIndex]?.image ? (
          <img
            src={songs[trackIndex]?.image}
            alt=""
            className="absolute w-10 h-10 top-3 left-8 lg:hidden"
          />
        ) : null}

        <p className="absolute w-full text-xs font-semibold text-center text-theme-green-700 bottom-6 lg:hidden">
          {songs[trackIndex]?.songName}
        </p>

        <AudioPlayer
          layout="stacked-reverse"
          autoPlayAfterSrcChange
          onPlay={(e) => console.log('onPlay')}
          src={songs[trackIndex]?.songLink}
          showSkipControls={true}
          showJumpControls={false}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
    </div>
  );
};

export default Player;
