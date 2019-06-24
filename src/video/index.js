/* eslint-disable react/require-default-props */
import elementary from '@quarkly/elementary';
import React from 'react';
import PropTypes from 'prop-types';

const Iframe = elementary.iframe({
  name: 'Video',
  variant: 'videos',
  effects: {
    hover: ':hover',
  },
});

const Video = ({ src, mute, showControls, showInfo, loop, autoPlay, ...other }) => {
  const parseUrl = src ? new URL(src) : '';
  const videoHost = parseUrl.hostname;
  let typeOfVideo;
  let videoId;
  let muteOption;
  let autoPlayOption;
  let showControlsOption;
  let loopOption;
  let showInfoOptionYoutube;
  let showInfoOptionVimeo;

  // YOUTUBE autoplay - добавляем к URL-строке &autoplay=1 (0* или 1)
  // YOUTUBE showControls - добавляем к URL-строке &controls=1 (0 или 1* или 2)
  // YOUTUBE loop - добавляем к URL-строке &loop=1 (0* или 1)
  // YOUTUBE showInfo - добавляем к URL-строке &showinfo=1 (0 или 1*)
  // YOUTUBE mute - добавляем к URL-строке &mute=1 (0* или 1)

  // TODO: VIMEO ссылки на видео могут быть разные https://developer.vimeo.com/api/oembed/videos
  // VIMEO autoplay - добавляем к URL-строке &autoplay=1 (0* или 1)
  // VIMEO showControls - добавляем к URL-строке &controls=1 (0 или 1* или 2)
  // VIMEO loop - добавляем к URL-строке &loop=1 (0* или 1)
  // VIMEO showInfo - добавляем &title=0 &byline=0 (0 или 1*)
  // VIMEO mute - добавляем к URL-строке &muted=1 (0* или 1)

  if (videoHost === 'www.youtube.com' || videoHost === 'youtube.com' || videoHost === 'youtu.be') {
    videoId = parseUrl.searchParams.get('v');
    typeOfVideo = 'youtube';
  } else if (videoHost === 'vimeo.com') {
    videoId = parseUrl.pathname;
    typeOfVideo = 'vimeo';
  } else {
    typeOfVideo = 'unknown';
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
  if (showInfo && typeOfVideo === 'vimeo') {
    showInfoOptionVimeo = '&title=1&byline=1';
  } else {
    showInfoOptionVimeo = '&title=0&byline=0';
  }

  // showInfo youtube
  if (showInfo && typeOfVideo === 'youtube') {
    showInfoOptionYoutube = '&showinfo=1';
  } else {
    showInfoOptionYoutube = '&showinfo=0';
  }

  const showInfoOption = typeOfVideo === 'youtube' ? showInfoOptionYoutube : showInfoOptionVimeo;

  // MUTE
  if (mute && typeOfVideo === 'youtube') {
    muteOption = '&mute=1';
  } else if (mute && typeOfVideo === 'vimeo') {
    muteOption = '&muted=1';
  } else if (mute === false && typeOfVideo === 'vimeo') {
    muteOption = '&muted=0';
  } else {
    muteOption = '&mute=0';
  }
  const extraOptions =
    muteOption + autoPlayOption + showControlsOption + loopOption + showInfoOption;

  return (
    <VideoWrap videoId={videoId} typeOfVideo={typeOfVideo} extraOptions={extraOptions} {...other} />
  );
};

const getVideoUrlByType = (type, videoId, extraOptions) => {
  if (type === 'youtube') {
    return `https://www.youtube.com/embed/${videoId}?rel=0${extraOptions}`;
  } else if (type === 'vimeo') {
    return `https://player.vimeo.com/video${videoId}?portrait=0&responsive=1${extraOptions}`;
  }
  return `https://www.youtube.com/embed/eE8Awccr-Ew?rel=0${extraOptions}`;
};

const VideoWrap = ({ videoId, extraOptions, typeOfVideo, ...other }) => {
  return (
    <Iframe
      {...other}
      title="video"
      src={getVideoUrlByType(typeOfVideo, videoId, extraOptions)}
      frameBorder="0"
      allowFullScreen
      allow="autoplay; fullscreen"
    />
  );
};

Video.propTypes = {
  ...Iframe.propTypes,
  src: PropTypes.string,
  mute: PropTypes.bool,
  showControls: PropTypes.bool,
  showInfo: PropTypes.bool,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
};

export default Video;
