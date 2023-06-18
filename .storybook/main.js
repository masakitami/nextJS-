module.exports = {
  stories: [
    {
    directory: '../app/',
    files: '*.stories.tsx',
    titlePrefix: 'pages'
    },
    {
    directory: '../components/',
    files: '*.stories.tsx',
    titlePrefix: 'components'
    },
    {
    directory:'../stories/',
    files: '*.stories.tsx',
    titlePrefix: 'test'
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  }
};