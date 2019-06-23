import elementary from '@quarkly/elementary';
import React from 'react';

const VideoWrap = elementary.div({
  name: 'Video',
  variant: 'videos',
  effects: {
    hover: ':hover',
  },
});

const NewVideo = ({ src, mute, showControls, showInfo, loop, autoplay, ...other }) => {
  const parseUrl = new URL(src);
  const videoHost = parseUrl.hostname;
  let TypeOfVideo;
  let videoId;
  // YOUTUBE autoplay - добавляем к URL-строке &autoplay=1 (0* или 1)
  // YOUTUBE showControls - добавляем к URL-строке &controls=1 (0 или 1* или 2)
  // YOUTUBE loop - добавляем к URL-строке &loop=1 (0* или 1)
  // YOUTUBE showInfo - добавляем к URL-строке &showinfo=1 (0 или 1*)
  // YOUTUBE mute - добавляем к URL-строке &mute=1 (0* или 1)
  if (videoHost === 'www.youtube.com' || videoHost === 'youtube.com' || videoHost === 'youtu.be') {
    videoId = parseUrl.searchParams.get('v');
    TypeOfVideo = 'youtube';
  } else if (videoHost === 'vimeo.com') {
    videoId = parseUrl.pathname;
    TypeOfVideo = 'vimeoVideoId';
  } else {
    TypeOfVideo = 'unknown';
  }

  return (
    <VideoWrap {...other}>
      <Video videoId={videoId} TypeOfVideo={TypeOfVideo} />
    </VideoWrap>
  );
};

const Video = ({ videoId, TypeOfVideo }) => {
  let embedVideo;

  const defaultVideo = 'https://www.youtube.com/embed/eE8Awccr-Ew';
  const youtubeVideo = `https://www.youtube.com/embed/${videoId}?rel=0`;
  const vimeoVideo = `https://player.vimeo.com/video/${videoId}?byline=0&portrait=0`;

  if (TypeOfVideo === 'youtube') {
    embedVideo = youtubeVideo;
  } else if (TypeOfVideo === 'vimeo') {
    embedVideo = vimeoVideo;
  } else {
    embedVideo = defaultVideo;
  }
  return (
    <iframe
      title="video"
      width="100%"
      height="auto"
      src={embedVideo}
      frameBorder="0"
      allowFullScreen
    />
  );
};

export default NewVideo;
