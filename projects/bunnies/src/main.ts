import { isMobile } from '@rain2d/rain/utils';
import { createRainWithScenes } from '@rain2d/scenes';
import { LoadState } from './scenes/loadScene';

createRainWithScenes({
  designWidth: 800,
  designHeight: 600,
  startScene: LoadState,
});

if (isMobile()) {
  document.getElementsByTagName('html')[0].style.backgroundColor = '#000';
}
