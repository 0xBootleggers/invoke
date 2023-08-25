import {
  ThemeOverrides,
  dangerDarkBtn,
  defaultDarkTheme,
  primaryDarkBtn,
  secondaryDarkBtn,
  successDarkBtn,
  warningDarkBtn,
} from '@daohaus/ui';

export const invokeMono = {
  step1: 'hsl(0, 0%, 100%)',
  step2: 'hsl(0, 0%, 66%)',
  step3: 'hsl(0, 0%, 22%)',
  step4: 'hsl(0, 0%, 0%)',
  step5: 'rgba(255, 0, 0, 0)',
};

export const invokePrimaryBtn = {
  ...primaryDarkBtn,
  solid: {
    text: invokeMono.step1,
    bg: invokeMono.step5,
    border: invokeMono.step1,
    bgHover: invokeMono.step5,
    borderHover: invokeMono.step2,
    bgFocus: invokeMono.step2,
    borderFocus: invokeMono.step1,
    bgDisabled: invokeMono.step5,
    borderDisabled: invokeMono.step3,
  },
  ghost: {
    text: invokeMono.step1,
    bgHover: invokeMono.step4,
    borderFocus: invokeMono.step4,
    disabled: invokeMono.step4,
  },
};

export const invokeSecondaryBtn = {
  ...secondaryDarkBtn,
  solid: {
    text: invokeMono.step1,
    bg: invokeMono.step3,
    border: invokeMono.step3,
    bgHover: invokeMono.step2,
    borderHover: invokeMono.step2,
    bgFocus: invokeMono.step3,
    borderFocus: invokeMono.step1,
    bgDisabled: invokeMono.step3,
    borderDisabled: invokeMono.step3,
  },
  outline: {
    ...invokePrimaryBtn.solid,
  },
};

const invokeFontFamily = {
  body: `'Major Mono Display', monospace`,
  header: `'Major Mono Display', monospace`,
  data: `'Ubuntu Mono', monospace`,
};

export const invokeTheme: ThemeOverrides = {
  themeName: 'invoke',
  rootBgColor: 'rgba(0,0,0,0.5)',
  rootFontColor: invokeMono.step1,
  border: {
    radius: '1px',
  },
  collapser: {
    iconColor: invokeMono.step2,
    bg: invokeMono.step3,
  },
  font: {
    family: invokeFontFamily,
    size: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '2rem',
      xl: '2.4rem',
      xxl: '3.2rem',
      xxxl: '4rem',
      xxxxl: '4.8rem',
    },
    weight: {
      extraLight: 200,
      light: 300,
      reg: 400,
      med: 500,
      bold: 700,
      black: 900,
    },
    lineHeight: '150%',
    letterSpacing: '1.5px',
  },
  field: {
    ...defaultDarkTheme.field,
    radius: '4px',
    inputFont: invokeFontFamily.data,
    labelFont: invokeFontFamily.header,
  },
  button: {
    primary: invokePrimaryBtn,
    secondary: invokeSecondaryBtn,
    success: successDarkBtn,
    warning: warningDarkBtn,
    danger: dangerDarkBtn,
    radius: '4px',
  },
  card: {
    bg: invokeMono.step4,
    border: invokeMono.step1,
    radius: '8px',
  },
  input: {
    ...defaultDarkTheme.input,
    border: invokeMono.step3,
    bg: invokeMono.step3,
    color: invokeMono.step1,
    hover: {
      bg: invokeMono.step3,
      border: invokeMono.step1,
    },
    focus: {
      bg: invokeMono.step3,
      border: invokeMono.step1,
    },
  },
  // dropdown: {
  //   content: {
  //     primary: {
  //       bg: invokeMono.step3,
  //     },
  //   },
  // },
  // toast: {
  //   bg: invokeMono.step3,
  //   border: invokeMono.step5,
  //   success: {
  //     bg: invokeMono.step3,
  //     border: invokeMono.step5,
  //   },
  // },
};
