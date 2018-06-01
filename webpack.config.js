const path = require('path');
const HtmlWevpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const cleanPlugin = new CleanWebpackPlugin(["dist"]);

const htmlPlugin = new HtmlWevpackPlugin({
    title: "Output Management"
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
  //   preloaders: [// esLint
  //   {
  //     test: /\.js$/,
  //     loders: ["eslint"],
  //     include: [
  //       path.resolve(__dirname, "src"),
  //     ],
  //   }
  // ],
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        use: [
          "babel-loader",
          "eslint-loader",
        ] 
        },
        // { test: /\.js$/, 
        //   exclude: /node_modules/, 
        //   loader: "eslint" 
        //   },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          "file-loader"
        ]
      }
    ]  
  },
  plugins: [
    
  ]
};