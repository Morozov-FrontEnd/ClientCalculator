module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.css$/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      }
    }, {
      test: /\.css$/,
      loader: 'babel-loader!next-css-json-loader',
    });
    return config;
  },
};