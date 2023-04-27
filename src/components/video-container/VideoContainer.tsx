import React from 'react';

import styles from './VideoContainer.module.scss';

export const VideoContainer = () => {
  return (
    <iframe
      src="https://player.vimeo.com/video/820590525?h=f8021c95d3&autoplay=1&muted=1&loop=1&background=1"
      className={styles['video']}
      allow="autoplay; fullscreen"
    />
  );
};
