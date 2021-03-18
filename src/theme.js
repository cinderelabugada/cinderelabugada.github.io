const sizes = {
  contentPadding: '15px',
  headerHeight: '200px',
  footerHeight: '80px'
}

const theme = {
  /* fontes */
  fonts: {
    header: "'Roboto', sans-serif",
    body: "'Lato', sans-serif"
  },

  /* cores */
  cores:  {
    purple: '#240724',
    yellow: '#EAD637'
  },

  /* tamanhos */
  sizes: {
    ...sizes,
    contentHeight:  `min-height: calc(
      100vh
      - ${sizes.headerHeight}
      - ${sizes.footerHeight}
      - (2 * ${sizes.contentPadding})
    `
  },
}

export default theme
