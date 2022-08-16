export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    orangered: '#ff4500',
    text: '#2a2a2a',
    background: '#fff',
    primary: '#07c',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    normal: 'normal',
  },
  opacities: {
    none: 0,
  },
  shadows: {
    main: '0 7px 10px rgba(0, 0, 0, 0.4)',
    cardHover:
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
  },
  transition: {
    transform: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    color: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  borders: {
    none: 'none',
    normal: '1px solid orangered',
    bold: '2px solid orangered',
  },
  borderStyles: {
    solid: 'solid',
  },
  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    round: '50%',
  },
};
