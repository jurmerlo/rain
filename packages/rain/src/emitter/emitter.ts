// biome-ignore-all lint/suspicious/noExplicitAny: Callback arguments can be anything.

/**
 * Type representing an event handler.
 */
export type EmitHandler = {
  /**
   * The callback function to execute when the event is emitted.
   * @param args The arguments passed to the callback.
   */
  callback: (...args: any[]) => void;
  /**
   * The optional filter function to determine if the callback should be executed.
   * @param args The arguments passed to the filter function.
   * @returns A boolean indicating whether the callback should be executed.
   */
  filter?: (...args: any[]) => boolean;

  /**
   * Whether the handler is active.
   */
  active: boolean;
};

/**
 * Class representing an event emitter.
 */
export class Emitter<T extends Record<string, any[]>> {
  /**
   * The registered event handlers.
   */
  private handlers: { [K in keyof T]?: EmitHandler[] } = {};

  /**
   * Registers an event handler.
   * @param event - The event to register the handler for.
   * @param callback - The callback function to execute when the event is emitted.
   * @param filter - An optional filter function to determine if the callback should be executed.
   * @returns The registered event handler.
   */
  on<K extends keyof T>(
    event: K,
    callback: (...event: T[K]) => void,
    filter?: (...event: T[K]) => boolean,
  ): EmitHandler {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }

    const handler: EmitHandler = { callback, filter, active: true };
    this.handlers[event].push(handler);

    return handler;
  }

  /**
   * Unregisters an event handler.
   * @param event - The event to unregister the handler from.
   * @param handler - The handler to unregister.
   */
  off<K extends keyof T>(event: K, handler: EmitHandler): void {
    if (!this.handlers[event]) {
      return;
    }

    const index = this.handlers[event].indexOf(handler);
    if (index !== -1) {
      this.handlers[event].splice(index, 1);
    }
  }

  /**
   * Emits an event.
   * @param event - The event to emit.
   * @param data - The data to pass to the event handlers.
   */
  emit<K extends keyof T>(event: K, ...data: T[K]): void {
    if (!this.handlers[event]) {
      return;
    }

    for (const handler of this.handlers[event]) {
      if (handler.active && (!handler.filter || handler.filter(...data))) {
        handler.callback(...data);
      }
    }
  }

  /**
   * Clears all event handlers.
   */
  clear(): void {
    this.handlers = {};
  }
}
