const nps = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        // include: [

        // ],
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                printWidth: 80,
                singleQuote: false
              }
            }
          }
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        include: [nps.join(__dirname, '..'), /node_modules\/react-mhoc/],
        loaders: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
