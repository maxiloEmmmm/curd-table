
module.exports = {
    presets: [
      ["@babel/env"],
      '@vue/babel-preset-jsx'
    ],
    plugins: [["@babel/plugin-transform-runtime", {
      corejs: 3
    }], 
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ],
  }