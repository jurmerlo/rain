import { Rain } from '@rainengine/rain';
import { LoadState } from './scenes/loadScene';

const rain: Rain = new Rain({ designWidth: 800, designHeight: 600, title: 'Bunnies' });
rain.start(LoadState);
