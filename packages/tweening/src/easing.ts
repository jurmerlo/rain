/**
 * A function that takes a progress value (0-1) and returns an eased value.
 * Used to control the rate of change in animations and tweens.
 */
export type Ease = (progress: number) => number;

/**
 * Back easing constant for standard back easing.
 */
const c1: number = 1.70158;

/**
 * Back easing constant for in-out back easing.
 */
const c2: number = c1 * 1.525;

/**
 * Back easing constant for cubic back calculations.
 */
const c3: number = c1 + 1;

/**
 * Elastic easing constant for standard elastic easing.
 */
const c4: number = (2 * Math.PI) / 3;

/**
 * Elastic easing constant for in-out elastic easing.
 */
const c5: number = (2 * Math.PI) / 4.5;

/**
 * Linear easing function with no acceleration.
 * @param progress - The progress value between 0 and 1.
 * @returns The same progress value (no easing applied).
 */
export function easeLinear(progress: number): number {
  return progress;
}

/**
 * Quadratic ease-in function. Acceleration from zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInQuad(progress: number): number {
  return progress * progress;
}

/**
 * Quadratic ease-out function. Deceleration to zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutQuad(progress: number): number {
  return 1 - (1 - progress) * (1 - progress);
}

/**
 * Quadratic ease-in-out function. Acceleration until halfway, then deceleration.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutQuad(progress: number): number {
  if (progress < 0.5) {
    return 2 * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 2 / 2;
  }
}

/**
 * Cubic ease-in function. Acceleration from zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInCubic(progress: number): number {
  return progress * progress * progress;
}

/**
 * Cubic ease-out function. Deceleration to zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

/**
 * Cubic ease-in-out function. Acceleration until halfway, then deceleration.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutCubic(progress: number): number {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 3 / 2;
  }
}

/**
 * Quartic ease-in function. Acceleration from zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInQuart(progress: number): number {
  return progress * progress * progress * progress;
}

/**
 * Quartic ease-out function. Deceleration to zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutQuart(progress: number): number {
  return 1 - (1 - progress) ** 4;
}

/**
 * Quartic ease-in-out function. Acceleration until halfway, then deceleration.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutQuart(progress: number): number {
  if (progress < 0.5) {
    return 8 * progress * progress * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 4 / 2;
  }
}

/**
 * Quintic ease-in function. Acceleration from zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInQuint(progress: number): number {
  return progress * progress * progress * progress * progress;
}

/**
 * Quintic ease-out function. Deceleration to zero velocity.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutQuint(progress: number): number {
  return 1 - (1 - progress) ** 5;
}

/**
 * Quintic ease-in-out function. Acceleration until halfway, then deceleration.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutQuint(progress: number): number {
  if (progress < 0.5) {
    return 16 * progress * progress * progress * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 5 / 2;
  }
}

/**
 * Sinusoidal ease-in function. Acceleration from zero velocity using a sine curve.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInSine(progress: number): number {
  return 1 - Math.cos((progress * Math.PI) / 2);
}

/**
 * Sinusoidal ease-out function. Deceleration to zero velocity using a sine curve.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutSine(progress: number): number {
  return Math.sin((progress * Math.PI) / 2);
}

/**
 * Sinusoidal ease-in-out function. Acceleration until halfway, then deceleration using a sine curve.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutSine(progress: number): number {
  return -(Math.cos(Math.PI * progress) - 1) / 2;
}

/**
 * Exponential ease-in function. Acceleration from zero velocity using exponential growth.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInExpo(progress: number): number {
  if (progress === 0) {
    return 0;
  }
  return 2 ** (10 * progress - 10);
}

/**
 * Exponential ease-out function. Deceleration to zero velocity using exponential decay.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutExpo(progress: number): number {
  if (progress === 1) {
    return 1;
  }
  return 1 - 2 ** (-10 * progress);
}

/**
 * Exponential ease-in-out function. Acceleration until halfway, then deceleration using exponential curves.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutExpo(progress: number): number {
  if (progress === 0) {
    return 0;
  }
  if (progress === 1) {
    return 1;
  }
  if (progress < 0.5) {
    return 2 ** (20 * progress - 10) / 2;
  }
  return (2 - 2 ** (-20 * progress + 10)) / 2;
}

/**
 * Circular ease-in function. Acceleration from zero velocity using a circular curve.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInCirc(progress: number): number {
  return 1 - Math.sqrt(1 - progress ** 2);
}

/**
 * Circular ease-out function. Deceleration to zero velocity using a circular curve.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutCirc(progress: number): number {
  return Math.sqrt(1 - (progress - 1) ** 2);
}

/**
 * Circular ease-in-out function. Acceleration until halfway, then deceleration using a circular curve.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutCirc(progress: number): number {
  if (progress < 0.5) {
    return (1 - Math.sqrt(1 - (2 * progress) ** 2)) / 2;
  } else {
    return (Math.sqrt(1 - (-2 * progress + 2) ** 2) + 1) / 2;
  }
}

/**
 * Back ease-in function. Anticipates the animation by backing up before starting.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInBack(progress: number): number {
  return c3 * progress * progress * progress - c1 * progress * progress;
}

/**
 * Back ease-out function. Overshoots the target before settling.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutBack(progress: number): number {
  return 1 + c3 * (progress - 1) ** 3 + c1 * (progress - 1) ** 2;
}

/**
 * Back ease-in-out function. Backs up at start and overshoots at end.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutBack(progress: number): number {
  if (progress < 0.5) {
    return ((2 * progress) ** 2 * ((c2 + 1) * 2 * progress - c2)) / 2;
  } else {
    return ((2 * progress - 2) ** 2 * ((c2 + 1) * (progress * 2 - 2) + c2) + 2) / 2;
  }
}

/**
 * Elastic ease-in function. Creates an elastic, spring-like effect at the start.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInElastic(progress: number): number {
  if (progress === 0) {
    return 0;
  }
  if (progress === 1) {
    return 1;
  }
  return -(2 ** (10 * progress - 10)) * Math.sin((progress * 10 - 10.75) * c4);
}

/**
 * Elastic ease-out function. Creates an elastic, spring-like effect at the end.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutElastic(progress: number): number {
  if (progress === 0) {
    return 0;
  }
  if (progress === 1) {
    return 1;
  }
  return 2 ** (-10 * progress) * Math.sin((progress * 10 - 0.75) * c4) + 1;
}

/**
 * Elastic ease-in-out function. Creates an elastic, spring-like effect at both start and end.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutElastic(progress: number): number {
  if (progress === 0) {
    return 0;
  }
  if (progress === 1) {
    return 1;
  }
  if (progress < 0.5) {
    return -(2 ** (20 * progress - 10) * Math.sin((20 * progress - 11.125) * c5)) / 2;
  }
  return (2 ** (-20 * progress + 10) * Math.sin((20 * progress - 11.125) * c5)) / 2 + 1;
}

/**
 * Bounce ease-in function. Creates a bouncing effect at the start.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInBounce(progress: number): number {
  return 1 - bounceOut(1 - progress);
}

/**
 * Bounce ease-out function. Creates a bouncing effect at the end.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeOutBounce(progress: number): number {
  return bounceOut(progress);
}

/**
 * Bounce ease-in-out function. Creates a bouncing effect at both start and end.
 * @param progress - The progress value between 0 and 1.
 * @returns The eased value.
 */
export function easeInOutBounce(progress: number): number {
  if (progress < 0.5) {
    return (1 - bounceOut(1 - 2 * progress)) / 2;
  } else {
    return (1 + bounceOut(2 * progress - 1)) / 2;
  }
}

/**
 * Internal helper function for bounce easing calculations.
 * Implements the bounce-out curve used by bounce easing functions.
 * @param progress - The progress value between 0 and 1.
 * @returns The bounced value.
 */
function bounceOut(progress: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (progress < 1 / d1) {
    return n1 * progress * progress;
  }
  if (progress < 2 / d1) {
    const p = progress - 1.5 / d1;
    return n1 * p * p + 0.75;
  }
  if (progress < 2.5 / d1) {
    const p = progress - 2.25 / d1;
    return n1 * p * p + 0.9375;
  }
  const p = progress - 2.625 / d1;
  return n1 * p * p + 0.984375;
}
