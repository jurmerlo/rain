import { type EmitHandler, Emitter } from '../emitter/emitter.js';
import { getKeyCodeFromString, type KeyCode } from './keyCode.js';

/**
 * Represents the state of a gamepad.
 */
type GamepadState = {
  /**
   * The axes values indexed by axis number.
   */
  axes: Record<number, number>;
  /**
   * The button values indexed by button number.
   */
  buttons: Record<number, number>;
};

/**
 * All possible input events that can be emitted.
 */
type InputEvents = {
  keyPressed: [keyCode: (typeof KeyCode)[keyof typeof KeyCode], code: string, key: string];
  keyReleased: [keyCode: (typeof KeyCode)[keyof typeof KeyCode], code: string, key: string];
  mousePressed: [button: number, x: number, y: number];
  mouseReleased: [button: number, x: number, y: number];
  mouseMoved: [x: number, y: number, dx: number, dy: number];
  mouseWheel: [dx: number, dy: number];
  mouseEnter: [];
  mouseLeave: [];
  touchPressed: [id: number, x: number, y: number, count: number];
  touchReleased: [id: number, x: number, y: number, count: number];
  touchMoved: [id: number, x: number, y: number, count: number];
  gamepadConnected: [index: number];
  gamepadDisconnected: [index: number];
  gamepadAxis: [index: number, axis: number, value: number];
  gamepadButton: [index: number, button: number, value: number];
};

/**
 * Handles all input events including keyboard, mouse, touch, and gamepad.
 */
export class Input {
  /**
   * Stores the current state of all connected gamepads.
   */
  private readonly gamepadStates: Record<number, GamepadState> = {};

  /**
   * The canvas element to attach input listeners to.
   */
  private readonly canvas: HTMLCanvasElement;

  /**
   * Event emitter for input events.
   */
  private emitter: Emitter<InputEvents> = new Emitter();

  /**
   * Create a new input handler.
   * @param canvas - The canvas element to attach input listeners to.
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.addListeners();
  }

  /**
   * Registers an event listener for a specific input event.
   * @param event - The event to register the listener for.
   * @param callback - The callback function to execute when the event is emitted.
   * @param filter - An optional filter function to determine if the callback should be executed.
   * @returns The handler for the event listener.
   */
  on<K extends keyof InputEvents>(
    event: K,
    callback: (...event: InputEvents[K]) => void,
    filter?: (...event: InputEvents[K]) => boolean,
  ): EmitHandler {
    return this.emitter.on(event, callback, filter);
  }

  /**
   * Unregister an event listener for a specific input event.
   * @param event - The event to unregister the listener from.
   * @param handler - The handler to remove.
   */
  off<K extends keyof InputEvents>(event: K, handler: EmitHandler): void {
    this.emitter.off(event, handler);
  }

  /**
   * Clears all registered event listeners.
   */
  clearListeners(): void {
    this.emitter.clear();
  }

  /**
   * Updates the gamepad state and emits events for axis and button changes.
   */
  update(): void {
    const gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
      if (!gamepad) {
        continue;
      }

      const state = this.gamepadStates[gamepad.index];
      if (!state) {
        continue;
      }

      for (let i = 0; i < gamepad.axes.length; i++) {
        const axis = gamepad.axes[i];
        const previousAxis = state.axes[i];

        if (previousAxis === undefined || previousAxis !== axis) {
          state.axes[i] = axis;
          this.emitter.emit('gamepadAxis', gamepad.index, i, axis);
        }
      }

      for (let i = 0; i < gamepad.buttons.length; i++) {
        const button = gamepad.buttons[i].value;
        const previousButton = state.buttons[i];

        if (previousButton === undefined || previousButton !== button) {
          state.buttons[i] = button;
          this.emitter.emit('gamepadButton', gamepad.index, i, button);
        }
      }
    }
  }

  /**
   * Destroys the input handler and removes all event listeners.
   */
  destroy(): void {
    this.removeListeners();
    this.emitter.clear();
  }

  /**
   * Adds all event listeners to the canvas and window.
   */
  private addListeners(): void {
    this.canvas.addEventListener('keydown', this.onKeyDown);
    this.canvas.addEventListener('keyup', this.onKeyUp);

    this.canvas.addEventListener('mousedown', this.onMouseDown);
    this.canvas.addEventListener('mouseup', this.onMouseUp);
    this.canvas.addEventListener('mousemove', this.onMouseMove);
    this.canvas.addEventListener('wheel', this.onMouseWheel);
    this.canvas.addEventListener('mouseenter', this.onMouseEnter);
    this.canvas.addEventListener('mouseleave', this.onMouseLeave);
    this.canvas.addEventListener('contextmenu', this.onMouseContext);

    this.canvas.addEventListener('touchstart', this.onTouchDown);
    this.canvas.addEventListener('touchend', this.onTouchUp);
    this.canvas.addEventListener('touchmove', this.onTouchMove);
    this.canvas.addEventListener('touchcancel', this.onTouchCancel);

    window.addEventListener('gamepadconnected', this.onGamepadConnected);
    window.addEventListener('gamepaddisconnected', this.onGamepadDisconnected);
  }

  /**
   * Removes all event listeners from the canvas and window.
   */
  private removeListeners(): void {
    this.canvas.removeEventListener('keydown', this.onKeyDown);
    this.canvas.removeEventListener('keyup', this.onKeyUp);

    this.canvas.removeEventListener('mousedown', this.onMouseDown);
    this.canvas.removeEventListener('mouseup', this.onMouseUp);
    this.canvas.removeEventListener('mousemove', this.onMouseMove);
    this.canvas.removeEventListener('wheel', this.onMouseWheel);
    this.canvas.removeEventListener('mouseenter', this.onMouseEnter);
    this.canvas.removeEventListener('mouseleave', this.onMouseLeave);
    this.canvas.removeEventListener('contextmenu', this.onMouseContext);

    this.canvas.removeEventListener('touchstart', this.onTouchDown);
    this.canvas.removeEventListener('touchend', this.onTouchUp);
    this.canvas.removeEventListener('touchmove', this.onTouchMove);
    this.canvas.removeEventListener('touchcancel', this.onTouchCancel);

    window.removeEventListener('gamepadconnected', this.onGamepadConnected);
    window.removeEventListener('gamepaddisconnected', this.onGamepadDisconnected);
  }

  /**
   * Handles keydown events and emits keyPressed events.
   * @param event - The keyboard event.
   */
  private onKeyDown = (event: KeyboardEvent): void => {
    if (!event.metaKey && !event.ctrlKey) {
      event.preventDefault();
    }
    event.stopPropagation();

    const keyCode = getKeyCodeFromString(event.code);

    this.emitter.emit('keyPressed', keyCode, event.code, event.key);
  };

  /**
   * Handles keyup events and emits keyReleased events.
   * @param event - The keyboard event.
   */
  private onKeyUp = (event: KeyboardEvent): void => {
    if (!event.metaKey && !event.ctrlKey) {
      event.preventDefault();
    }
    event.stopPropagation();

    const keyCode = getKeyCodeFromString(event.code);

    this.emitter.emit('keyReleased', keyCode, event.code, event.key);
  };

  /**
   * Handles mousedown events and emits mousePressed events.
   * @param event - The mouse event.
   */
  private onMouseDown = (event: MouseEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.emitter.emit('mousePressed', event.button, x, y);
  };

  /**
   * Handles mouseup events and emits mouseReleased events.
   * @param event - The mouse event.
   */
  private onMouseUp = (event: MouseEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.emitter.emit('mouseReleased', event.button, x, y);
  };

  /**
   * Handles mousemove events and emits mouseMoved events.
   * @param event - The mouse event.
   */
  private onMouseMove = (event: MouseEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.emitter.emit('mouseMoved', x, y, event.movementX, event.movementY);
  };

  /**
   * Handles wheel events and emits mouseWheel events.
   * @param event - The wheel event.
   */
  private onMouseWheel = (event: WheelEvent): void => {
    event.preventDefault();
    this.emitter.emit('mouseWheel', event.deltaX, event.deltaY);
  };

  /**
   * Handles mouseenter events and emits mouseEnter events.
   */
  private onMouseEnter = (): void => {
    this.emitter.emit('mouseEnter');
  };

  /**
   * Handles mouseleave events and emits mouseLeave events.
   */
  private onMouseLeave = (): void => {
    this.emitter.emit('mouseLeave');
  };

  /**
   * Handles context menu events and prevents the default context menu from appearing.
   * @param event - The mouse event.
   */
  private onMouseContext = (event: MouseEvent): void => {
    event.preventDefault();
    event.stopImmediatePropagation();
  };

  /**
   * Handles touchstart events and emits touchPressed and mousePressed events.
   * @param event - The touch event.
   */
  private onTouchDown = (event: TouchEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const rect = this.canvas.getBoundingClientRect();
    let evX = 0;
    let evY = 0;
    let hasTouch = false;

    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches.item(i);
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (!hasTouch) {
          evX = x;
          evY = y;
          hasTouch = true;
        }

        this.emitter.emit('touchPressed', touch.identifier, x, y, event.touches.length);
      }
    }

    if (hasTouch) {
      this.emitter.emit('mousePressed', 0, evX, evY);
    }
  };

  /**
   * Handles touchend events and emits touchReleased and mouseReleased events.
   * @param event - The touch event.
   */
  private onTouchUp = (event: TouchEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const rect = this.canvas.getBoundingClientRect();
    let evX = 0;
    let evY = 0;
    let hasTouch = false;

    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches.item(i);
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (!hasTouch) {
          evX = x;
          evY = y;
          hasTouch = true;
        }

        this.emitter.emit('touchReleased', touch.identifier, x, y, event.touches.length);
      }
    }

    if (hasTouch) {
      this.emitter.emit('mouseReleased', 0, evX, evY);
    }
  };

  /**
   * Handles touchmove events and emits touchMoved and mouseMoved events.
   * @param event - The touch event.
   */
  private onTouchMove = (event: TouchEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const rect = this.canvas.getBoundingClientRect();
    let evX = 0;
    let evY = 0;
    let hasTouch = false;

    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches.item(i);
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (!hasTouch) {
          evX = x;
          evY = y;
          hasTouch = true;
        }

        this.emitter.emit('touchMoved', touch.identifier, x, y, event.touches.length);
      }
    }

    if (hasTouch) {
      this.emitter.emit('mouseMoved', evX, evY, 0, 0);
    }
  };

  /**
   * Handles touchcancel events and emits touchReleased and mouseReleased events.
   * @param event - The touch event.
   */
  private onTouchCancel = (event: TouchEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const rect = this.canvas.getBoundingClientRect();
    let evX = 0;
    let evY = 0;
    let hasTouch = false;

    for (let i = 0; i < event.changedTouches.length; i++) {
      const touch = event.changedTouches.item(i);
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (!hasTouch) {
          evX = x;
          evY = y;
          hasTouch = true;
        }

        this.emitter.emit('touchReleased', touch.identifier, x, y, event.touches.length);
      }
    }

    if (hasTouch) {
      this.emitter.emit('mouseReleased', 0, evX, evY);
    }
  };

  /**
   * Handles gamepad connected events and initializes gamepad state.
   * @param event - The gamepad event.
   */
  private onGamepadConnected = (event: GamepadEvent): void => {
    this.gamepadStates[event.gamepad.index] = {
      buttons: {},
      axes: {},
    };

    this.emitter.emit('gamepadConnected', event.gamepad.index);
  };

  /**
   * Handles gamepad disconnected events and removes gamepad state.
   * @param event - The gamepad event.
   */
  private onGamepadDisconnected = (event: GamepadEvent): void => {
    delete this.gamepadStates[event.gamepad.index];

    this.emitter.emit('gamepadDisconnected', event.gamepad.index);
  };
}
