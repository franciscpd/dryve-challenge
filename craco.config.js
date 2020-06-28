const path = require('path');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
  webpack: {
    alias: {
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@modules': path.resolve(__dirname, 'src', 'modules'),
      '@config': path.resolve(__dirname, 'src', 'config'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
