import { Rain } from '@rainengine/rain';
import { LoadState } from './states/loadState';

const rain: Rain = new Rain({ designWidth: 800, designHeight: 600, title: 'Bunnies', fillWindow: true });
rain.start(LoadState);
