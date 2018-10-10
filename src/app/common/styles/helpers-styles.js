// helpers for components

import { css } from "styled-components";

export const fontFamily = {
  fontPrimary: "\"Helvetica Neue\", Helvetica, Arial, sans-serif;",
  fontSecondary: "\"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif",
  fontTertiary: "\"Lato\", sans-serif",
  fontQuaternary: "\"Montserrat\", sans-serif",
  fontProx: "proxima-nova,Helvetica Neue,Helvetica,Arial",
};

export const color = {
  primary: "#46aeff",
  network: "#6590FA",
  primaryhover: "#4180c0",
  secondary: "#ececec",
  black: "#000000",
  dark: "#373737",
  landingblue: "#6592fa",
  offblack: "#444",
  darkgray: "#636363",
  formdark: "#4A4A4A",
  border: "#DBDBDB",
  subtextgray: "#5e5e5e",
  offgray: "#858585",
  white: "#FFFFFF",
  offwhite: "#FCFCFC",
  whitehover: "rgba(255,255,255, 0.2)",
  whitedarker: "#848484",
  whitesecondary: "#f5f6fa",
  pinkhover: "rgba(218, 34, 80, 1)",
  gray: "#6B6B6B",
  lightgrey: "#f3f3f3",
  lightergrey: "#969696",
  subgrey: "#9B9B9B;",
  greyhover: "rgba(0,0,25, 0.1)",
  bluegrey: "#2a3338",
  blueishgrey: "#eff1f6",
  lightbluegrey: "#f0f1f6",
  navy: "#506cd2",
  darknavy: "#1e2938",
  turtoise: "#50d2c2",
  green: "#00c292",
  peach: "#fb9678",
  pink: "#ff3366",
  gold: "#fec107",
  red: "#f0003c",
  yellow: "#FFAF33",
  yellowhover: "#ffc467",
  blue: "#4A90E2",
  bluehover: "#7cb7fb",
  overlay: "rgba(0,0,0, 0.6)",
  flashsale: "#F6FF00",
  timer: "#4D4D4D",
  lighterdark: "#4D4D4D",
};

export const fontSize = {
  p: { sm: 1.2, md: 1.4, lg: 1.6, xlg: 1.8 },
  h1: { sm: 1.2, md: 2.8, mmd: 3, lg: 4.8, xxlg: 7.6 },
  h2: { sm: 1.2, smmd: 1.7, md: 2, mmd: 2.5, lg: 3, xlg: 4.2 },
  h3: { sm: 1.2, md: 2, lg: 2 },
  h4: { sm: 1.2, md: 1.5, lg: 3 },
  h5: { sm: 1.2, md: 1.2, lg: 3 },
  btn: { xs: 1.1, sm: 1.2, md: 1.4, lg: 1.6, xl: 1.8 },
};

export const borderRadius = {
  brNone: "0px",
  brXs: "2px",
  brSm: "3px",
  brMd: "4px",
  brLg: "5px",
  brXl: "8px",
  brRadius: "50%",
};

export const letterSpacing = {
  lsNone: "0",
  lsXs: "1px",
  lsSm: "2px",
  lsMd: "3px",
  lsLg: "4px",
  lsXl: "5px",
};

export const padding = {
  btn: {
    p1: "1.3em 3em",
    p2: "1em 2.5em",
    p3: ".8em 2em",
  },
};

export const fontStyle = {
  light: "300",
  normal: "normal",
  italic: "italic",
  oblique: "oblique",
};

export const fontWeight = {
  extraThin: 100,
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  fblack: 900,
};

export const display = {
  block: "block",
  inline: "inline",
  inlineBlock: "inline-block",
  flex: "flex",
};

export const verticalAlign = {
  vaTop: "top",
  vaBottom: "bottom",
  vaMiddle: "middle",
  vaSuper: "super",
  vaSub: "sub",
};

export const textTransform = {
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

export const marginY = {
  mYnone: "0",
  mYxxxs: ".25em 0",
  mYxxs: ".35em 0",
  mYmds: ".4em 0",
  mYxs: ".65em 0",
  mYsm: "1em 0",
  mYmd: "1.5em 0",
  mYlg: "2em 0",
  mYxl: "2.5em 0",
  mYxlcustom: "1.em 0 1em 0",
  mcustomsubhead: "1em 0 1em 0",
  mcustomsub: "0 0 1em 0",
  mcustom: "1em 0 3em 0",
  mcustomacc: "1em 0 3em 0",
  mYmdsheader: ".4em 0",
  mYmdsabout: "1.5em 0 1.0em 0",
};

/* -- do not edit below this line -- */

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}

export function truncateMultiple(line, height, width) {
  return `
    height: ${height};
    width: ${width};
    -webkit-line-clamp: ${line};
    line-clamp: ${line};
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `;
}

export const position = {
  centerX: "left: 50%; transform: translate(-50%, 0);",
  centerY: "top: 50%; transform: translate(0, -50%);",
  centerXY: "top: 50%; left: 50%; transform: translate(-50%, -50%);",
  centerRemove: "left: auto; top: auto; transform: translate(0, 0);",
};

export const media = {
  xlgDesktop: (...args) => css`
    @media (min-width: 1970px) {
      ${css(...args)};
    }
  `,
  lgDesktop: (...args) => css`
    @media (max-width: 1970px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (max-width: 1780px) {
      ${css(...args)};
    }
  `,
  desktopSm: (...args) => css`
    @media (max-width: 1580px) {
      ${css(...args)};
    }
  `,
  laptopXl: (...args) => css`
    @media (max-width: 1460px) {
      ${css(...args)};
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)};
    }
  `,
  laptopY: (...args) => css`
    @media (max-height: 1000px) {
      ${css(...args)};
    }
  `,
  laptopMmd: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
    }
  `,
  laptopMd: (...args) => css`
    @media (max-width: 1100px) {
      ${css(...args)};
    }
  `,
  laptopSm: (...args) => css`
    @media (max-width: 991px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
    }
  `,
  tabletSm: (...args) => css`
    @media (max-width: 608px) {
      ${css(...args)};
    }
  `,
  phone: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)};
    }
  `,
  phoneSm: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `,
  phoneXs: (...args) => css`
    @media (max-width: 370px) {
      ${css(...args)};
    }
  `,
};
