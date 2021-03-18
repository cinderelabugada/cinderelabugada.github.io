const sizes = {
  contentPadding: '15px',
  headerHeight: '200px',
  footerHeight: '70px'
}

const theme = {
  /* fontes */
  fontes: {
    cabecalho: "'Roboto', sans-serif",
    corpo: "'Lato', sans-serif"
  },

  /* cores */
  cores:  {
    roxo: '#240724',
    amarelo: '#EAD637',
    branco: '#CCCCCC',
    preto: '#222222'
  },

  /* tamanhos */
  tamanhos: {
    ...sizes,
    contentHeight:  `calc(
      100vh
      - ${sizes.headerHeight}
      - ${sizes.footerHeight}
      - (2 * ${sizes.contentPadding})
    )`
  },
}

export default theme
