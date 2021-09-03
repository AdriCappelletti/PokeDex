module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

// Jest corre pasa archivos por babel y luego genera archivos adecuados para node
// y luego corre los tests sobre el js optimizado
