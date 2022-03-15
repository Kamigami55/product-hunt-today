import { Config } from 'remotion'

Config.Rendering.setImageFormat('jpeg')
Config.Output.setOverwriteOutput(true)

// https://www.remotion.dev/docs/webpack#enable-tailwindcss-support
Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
  return {
    ...currentConfiguration,
    module: {
      ...currentConfiguration.module,
      rules: [
        ...(currentConfiguration.module?.rules
          ? currentConfiguration.module.rules
          : []
        ).filter((rule) => {
          if (rule === '...') {
            return false
          }
          if (rule.test?.toString().includes('.css')) {
            return false
          }
          return true
        }),
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    'postcss-preset-env',
                    'tailwindcss',
                    'autoprefixer',
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  }
})
