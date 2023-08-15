import {
  ButtonTheme,
  ThemeOverrides,
  dangerDarkBtn,
  successDarkBtn,
  warningDarkBtn,
} from "@daohaus/ui";

export const grayDark = {
  step1: "hsl(0, 0%, 9.5%)",
  step2: "hsl(0, 0%, 10.5%)",
  step3: "hsl(0, 0%, 15.8%)",
  step4: "hsl(0, 0%, 18.9%)",
  step5: "hsl(0, 0%, 21.7%)",
  step6: "hsl(0, 0%, 24.7%)",
  step7: "hsl(0, 0%, 29.1%)",
  step8: "hsl(0, 0%, 37.5%)",
  step9: "hsl(0, 0%, 43.0%)",
  step10: "hsl(0, 0%, 50.7%)",
  step11: "hsl(0, 0%, 69.5%)",
  step12: "hsl(0, 0%, 93.5%)",
};

export const invokeDarkBtn: ButtonTheme = {
  solid: {
    text: grayDark.step12,
    bg: grayDark.step4,
    border: grayDark.step12,
    bgHover: grayDark.step10,
    borderHover: grayDark.step10,
    bgFocus: grayDark.step9,
    borderFocus: grayDark.step11,
    bgDisabled: grayDark.step6,
    borderDisabled: grayDark.step6,
  },
  outline: {
    text: grayDark.step12,
    border: grayDark.step12,
    hover: grayDark.step10,
    focus: grayDark.step11,
    disabled: grayDark.step6,
  },
  ghost: {
    text: grayDark.step10,
    bgHover: grayDark.step3,
    borderFocus: grayDark.step4,
    disabled: grayDark.step8,
  },
  link: {
    text: grayDark.step9,
    hover: grayDark.step10,
    focus: grayDark.step11,
    disabled: grayDark.step6,
  },
};

export const invokeTheme: ThemeOverrides = {
  themeName: "invoke",
  rootBgColor: grayDark.step1,
  rootFontColor: grayDark.step12,
  border: {
    radius: "1px",
  },
  collapser: {
    iconColor: grayDark.step9,
  },
  font: {
    family: {
      body: `'Major Mono Display', monospace`,
      data: `'Ubuntu Mono', monospace`,
    },
    size: {
      xs: "1.2rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "2rem",
      xl: "2.4rem",
      xxl: "3.2rem",
      xxxl: "4rem",
      xxxxl: "4.8rem",
    },
    weight: {
      extraLight: 200,
      light: 300,
      reg: 400,
      med: 500,
      bold: 700,
      black: 900,
    },
    lineHeight: "150%",
    letterSpacing: "1.5px",
  },
  button: {
    primary: invokeDarkBtn,
    secondary: invokeDarkBtn,
    success: successDarkBtn,
    warning: warningDarkBtn,
    danger: dangerDarkBtn,
  },
  card: {
    bg: grayDark.step4,
    border: grayDark.step4,
    radius: "0rem",
  },
};
