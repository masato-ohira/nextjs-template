export const colors = {
  primary: '#43CE9F',
  link: '#4487C5',
  success: '#B0BD3B',
  info: '#1D9BEF',
  warning: '#F29503',
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

export const hex2rgb = (hex: string) => {
  try {
    if (/^#/.test(hex)) {
      hex = hex.slice(1)
    }
    if (hex.length !== 3 && hex.length !== 6) {
      throw new Error('Invaild hex String')
    }

    let digit = hex.split('')

    if (digit.length === 3) {
      digit = [digit[0], digit[0], digit[1], digit[1], digit[2], digit[2]]
    }
    let r = parseInt([digit[0], digit[1]].join(''), 16)
    let g = parseInt([digit[2], digit[3]].join(''), 16)
    let b = parseInt([digit[4], digit[5]].join(''), 16)
    return [r, g, b].join(',')
  } catch (error) {
    return null
  }
}

export const rgba = (hex: string, opacity: number) => {
  return `rgba(${hex2rgb(hex)}, ${opacity})`
}
