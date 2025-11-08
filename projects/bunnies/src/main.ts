import { Rain } from '@rainengine/rain';
import { LoadState } from './scenes/loadScene';

const rain: Rain = new Rain({ designWidth: 800, designHeight: 600, title: 'Bunnies', fillWindow: true, hdpi: false });
rain.start(LoadState);
