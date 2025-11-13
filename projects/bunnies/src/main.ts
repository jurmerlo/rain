import { Rain } from '@rainengine/rain';
import { LoadState } from './scenes/loadScene';
import { isMobile } from '@rainengine/rain/utils';

const rain: Rain = new Rain({
  designWidth: 800,
  designHeight: 600,
  title: 'Bunnies',
  fillWindow: isMobile(),
});
rain.start(LoadState);

if (isMobile()) {
  document.getElementsByTagName('html')[0].style.backgroundColor = '#000';
}
