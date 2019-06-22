import elementary from '@quarkly/elementary';
import React from 'react';
const videoLink = 'https://www.youtube.com/watch?v=c6t3bW7kx6E';

const VideoWrap = elementary.div({
  name: 'Video',
  variant: 'videos',
  effects: {
    hover: ':hover',
  },
});

const NewVideo = ({ src, ...other }) => {
  const parseUrl = new URL(src);
  const videoHost = parseUrl.hostname;
  let TypeOfVideo;
  let youtubeVideoId;
  let vimeoVideoId;

  if (videoHost === 'www.youtube.com' || videoHost === 'youtube.com' || videoHost === 'youtu.be') {
    youtubeVideoId = parseUrl.searchParams.get('v');
    TypeOfVideo = 'youtube';
  } else if (videoHost === 'vimeo.com') {
    vimeoVideoId = parseUrl.pathname;
    TypeOfVideo = 'vimeoVideoId';
  } else {
    TypeOfVideo = 'unknown';
  }

  return (
    <VideoWrap {...other}>
      <Video
        youtubeVideoId={youtubeVideoId}
        vimeoVideoId={vimeoVideoId}
        TypeOfVideo={TypeOfVideo}
      />
    </VideoWrap>
  );
};

const Video = ({ youtubeVideoId, vimeoVideoId, TypeOfVideo }) => {
  const youtubeVideo = (
    <iframe
      title="youtube video"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
  const vimeoVideo = (
    <iframe
      title="vimeo video"
      src={`https://player.vimeo.com/video/${vimeoVideoId}?byline=0&portrait=0`}
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  );
  const defaultVideo = (
    <iframe
      title="youtube video"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/eE8Awccr-Ew"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
  const embedVideo =
    TypeOfVideo == 'youtube' ? youtubeVideo : TypeOfVideo == 'vimeo' ? vimeoVideo : defaultVideo;
  return <VideoWrap>{embedVideo}</VideoWrap>;
};

export default NewVideo;
