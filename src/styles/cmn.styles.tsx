export const colors = {
  primary: '#5eb5a5',
  link: '#4588c5',
  success: '#b0be3d',
  info: '#868cb7',
  warning: '#eda629',
  danger: '#ea2b00',
  text: '#222',
}

export const fonts = {
  sans: `'Noto Sans JP', sans-serif`,
  enSans: `'Roboto', sans-serif`,
}

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const mq = (key: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[key]}px)`

export const rem = (size: number) => {
  return `font-size: ${size * 0.625}rem`
}

export const getVw = (size: number) => {
  let rate = 100 / 1920
  return `${rate * size}vw`
}

export const spVw = (size: number) => {
  let rate = 100 / 350
  return `${rate * size}vw`
}
