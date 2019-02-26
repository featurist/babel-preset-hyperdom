module.exports = function () {
  return {
    plugins: [
      [require("@babel/plugin-transform-react-jsx"), { pragma: 'hyperdom.jsx' }],
      require("babel-plugin-transform-jsx-hyperdom-binding"),
    ],
  }
};
