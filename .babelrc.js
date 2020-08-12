
module.exports = {
    presets: [
      ["@babel/env"]
    ],
    plugins: [["@babel/plugin-syntax-jsx"], ["@babel/plugin-transform-runtime", {
      corejs: 3
    }], [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]],
  }