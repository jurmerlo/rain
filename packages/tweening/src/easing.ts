export type Ease = (progress: number) => number;

const c1: number = 1.70158;
const c2: number = c1 * 1.525;
const c3: number = c1 + 1;
const c4: number = (2 * Math.PI) / 3;
const c5: number = (2 * Math.PI) / 4.5;

export function easeLinear(progress: number): number {
  return progress;
}

export function easeInQuad(progress: number): number {
  return progress * progress;
}

export function easeOutQuad(progress: number): number {
  return 1 - (1 - progress) * (1 - progress);
}

export function easeInOutQuad(progress: number): number {
  if (progress < 0.5) {
    return 2 * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 2 / 2;
  }
}

export function easeInCubic(progress: number): number {
  return progress * progress * progress;
}

export function easeOutCubic(progress: number): number {
  return 1 - (1 - progress) ** 3;
}

export function easeInOutCubic(progress: number): number {
  if (progress < 0.5) {
    return 4 * progress * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 3 / 2;
  }
}

export function easeInQuart(progress: number): number {
  return progress * progress * progress * progress;
}

export function easeOutQuart(progress: number): number {
  return 1 - (1 - progress) ** 4;
}

export function easeInOutQuart(progress: number): number {
  if (progress < 0.5) {
    return 8 * progress * progress * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 4 / 2;
  }
}

export function easeInQuint(progress: number): number {
  return progress * progress * progress * progress * progress;
}

export function easeOutQuint(progress: number): number {
  return 1 - (1 - progress) ** 5;
}

export function easeInOutQuint(progress: number): number {
  if (progress < 0.5) {
    return 16 * progress * progress * progress * progress * progress;
  } else {
    return 1 - (-2 * progress + 2) ** 5 / 2;
  }
}

export function easeInSine(progress: number): number {
  return 1 - Math.cos((progress * Math.PI) / 2);
}

export function easeOutSine(progress: number): number {
  return Math.sin((progress * Math.PI) / 2);
}

export function easeInOutSine(progress: number): number {
  return -(Math.cos(Math.PI * progress) - 1) / 2;
}

export function easeInExpo(progress: number): number {
  if (progress === 0) {
    return 0;
  } else {
    return 2 ** (10 * progress - 10);
  }
}

export function easeOutExpo(progress: number): number {
  if (progress === 1) {
    return 1;
  } else {
    return 1 - 2 ** (-10 * progress);
  }
}

export function easeInOutExpo(progress: number): number {
  if (progress === 0) {
    return 0;
  } else if (progress === 1) {
    return 1;
  } else if (progress < 0.5) {
    return 2 ** (20 * progress - 10) / 2;
  } else {
    return (2 - 2 ** (-20 * progress + 10)) / 2;
  }
}

export function easeInCirc(progress: number): number {
  return 1 - Math.sqrt(1 - progress ** 2);
}

export function easeOutCirc(progress: number): number {
  return Math.sqrt(1 - (progress - 1) ** 2);
}

export function easeInOutCirc(progress: number): number {
  if (progress < 0.5) {
    return (1 - Math.sqrt(1 - (2 * progress) ** 2)) / 2;
  } else {
    return (Math.sqrt(1 - (-2 * progress + 2) ** 2) + 1) / 2;
  }
}

export function easeInBack(progress: number): number {
  return c3 * progress * progress * progress - c1 * progress * progress;
}

export function easeOutBack(progress: number): number {
  return 1 + c3 * (progress - 1) ** 3 + c1 * (progress - 1) ** 2;
}

export function easeInOutBack(progress: number): number {
  if (progress < 0.5) {
    return ((2 * progress) ** 2 * ((c2 + 1) * 2 * progress - c2)) / 2;
  } else {
    return ((2 * progress - 2) ** 2 * ((c2 + 1) * (progress * 2 - 2) + c2) + 2) / 2;
  }
}

export function easeInElastic(progress: number): number {
  if (progress === 0) {
    return 0;
  } else if (progress === 1) {
    return 1;
  } else {
    return -(2 ** (10 * progress - 10)) * Math.sin((progress * 10 - 10.75) * c4);
  }
}

export function easeOutElastic(progress: number): number {
  if (progress === 0) {
    return 0;
  } else if (progress === 1) {
    return 1;
  } else {
    return 2 ** (-10 * progress) * Math.sin((progress * 10 - 0.75) * c4) + 1;
  }
}

export function easeInOutElastic(progress: number): number {
  if (progress === 0) {
    return 0;
  } else if (progress === 1) {
    return 1;
  } else if (progress < 0.5) {
    return -(2 ** (20 * progress - 10) * Math.sin((20 * progress - 11.125) * c5)) / 2;
  } else {
    return (2 ** (-20 * progress + 10) * Math.sin((20 * progress - 11.125) * c5)) / 2 + 1;
  }
}

export function easeInBounce(progress: number): number {
  return 1 - bounceOut(1 - progress);
}

export function easeOutBounce(progress: number): number {
  return bounceOut(progress);
}

export function easeInOutBounce(progress: number): number {
  if (progress < 0.5) {
    return (1 - bounceOut(1 - 2 * progress)) / 2;
  } else {
    return (1 + bounceOut(2 * progress - 1)) / 2;
  }
}

function bounceOut(progress: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (progress < 1 / d1) {
    return n1 * progress * progress;
  } else if (progress < 2 / d1) {
    progress -= 1.5 / d1;
    return n1 * progress * progress + 0.75;
  } else if (progress < 2.5 / d1) {
    progress -= 2.25 / d1;
    return n1 * progress * progress + 0.9375;
  } else {
    progress -= 2.625 / d1;
    return n1 * progress * progress + 0.984375;
  }
}
