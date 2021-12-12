import {StylesConfig, Theme} from "react-select"
export const ReactSelectStyles: StylesConfig = {
  control: (styles, {isDisabled}) => ({
    ...styles,
    display: 'flex',
    border: '1px solid white',
    backgroundColor: 'transparent',
    opacity: isDisabled ? '0.6' : '1' ,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: 'white',
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'white',
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: '#CE00CE'
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: '#FFF'
  })
}

export const SelectTheme = (theme: Theme ) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#CE00CE',
    neutral0: 'hsl(213.3,27.3%,6.5%)',
  },
})
