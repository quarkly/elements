import elementary from '@quarkly/elementary';
import React from 'react';

const VideoWrap = elementary.div({
  name: 'Video',
  variant: 'videos',
  effects: {
    hover: ':hover',
  },
});

const NewVideo = ({ src, mute, showControls, showInfo, loop, autoPlay, ...other }) => {
  const parseUrl = new URL(src);
  const videoHost = parseUrl.hostname;
  let TypeOfVideo;
  let videoId;
  let muteOption;
  let autoPlayOption;
  let showControlsOption;
  let loopOption;
  let showInfoOption;
  let showInfoOptionYoutube;
  let showInfoOptionVimeo;
  let extraOptions;

  // YOUTUBE autoplay - добавляем к URL-строке &autoplay=1 (0* или 1)
  // YOUTUBE showControls - добавляем к URL-строке &controls=1 (0 или 1* или 2)
  // YOUTUBE loop - добавляем к URL-строке &loop=1 (0* или 1)
  // YOUTUBE showInfo - добавляем к URL-строке &showinfo=1 (0 или 1*)
  // YOUTUBE mute - добавляем к URL-строке &mute=1 (0* или 1)

  // VIMEO ссылки на видео могут быть разные https://developer.vimeo.com/api/oembed/videos
  // VIMEO autoplay - добавляем к URL-строке &autoplay=1 (0* или 1)
  // VIMEO showControls - добавляем к URL-строке &controls=1 (0 или 1* или 2)
  // VIMEO loop - добавляем к URL-строке &loop=1 (0* или 1)
  // VIMEO showInfo - добавляем &title=0 &byline=0 (0 или 1*)
  // VIMEO mute - добавляем к URL-строке &muted=1 (0* или 1)

  if (videoHost === 'www.youtube.com' || videoHost === 'youtube.com' || videoHost === 'youtu.be') {
    videoId = parseUrl.searchParams.get('v');
    TypeOfVideo = 'youtube';
  } else if (videoHost === 'vimeo.com') {
    videoId = parseUrl.pathname;
    TypeOfVideo = 'vimeo';
  } else {
    TypeOfVideo = 'unknown';
  }

  // autoplay
  if (autoPlay) {
    autoPlayOption = '&autoplay=1';
  } else {
    autoPlayOption = '&autoplay=0';
  }

  // showControls
  if (showControls) {
    showControlsOption = '&controls=1';
  } else {
    showControlsOption = '&controls=0';
  }

  // loopOption
  if (loop) {
    loopOption = '&loop=1';
  } else {
    loopOption = '&loop=0';
  }

  // showInfo vimeo
  if (showInfo && TypeOfVideo === 'vimeo') {
    showInfoOptionVimeo = '&title=1&byline=1';
  } else {
    showInfoOptionVimeo = '&title=0&byline=0';
  }

  // showInfo youtube
  if (showInfo && TypeOfVideo === 'youtube') {
    showInfoOptionYoutube = '&showinfo=1';
  } else {
    showInfoOptionYoutube = '&showinfo=0';
  }

  showInfoOption = TypeOfVideo === 'youtube' ? showInfoOptionYoutube : showInfoOptionVimeo;

  // MUTE
  if (mute && TypeOfVideo === 'youtube') {
    muteOption = '&mute=1';
  } else if (mute && TypeOfVideo === 'vimeo') {
    muteOption = '&muted=1';
  } else if (mute === false && TypeOfVideo === 'vimeo') {
    muteOption = '&muted=0';
  } else {
    muteOption = '&mute=0';
  }
  extraOptions = muteOption + autoPlayOption + showControlsOption + loopOption + showInfoOption;

  return (
    <VideoWrap {...other}>
      <Video videoId={videoId} TypeOfVideo={TypeOfVideo} extraOptions={extraOptions} />
    </VideoWrap>
  );
};

const Video = ({ videoId, extraOptions, TypeOfVideo }) => {
  let embedVideo;

  const defaultVideo = `https://www.youtube.com/embed/eE8Awccr-Ew?rel=0${extraOptions}`;
  const youtubeVideo = `https://www.youtube.com/embed/${videoId}?rel=0${extraOptions}`;
  const vimeoVideo = `https://player.vimeo.com/video${videoId}?portrait=0&responsive=1${extraOptions}`;

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
      height="100%"
      src={embedVideo}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; fullscreen"
    />
  );
};

export default NewVideo;
