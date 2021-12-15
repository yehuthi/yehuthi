// yarn add --dev webpack webpack-cli typescript ts-loader sass sass-loader css-loader style-loader html-webpack-plugin
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const dev = process.env.NODE_ENV !== "production";

module.exports = {
	mode: dev ? "development" : "production",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	entry: "./src/index.ts",
	module: {
		rules: [
			{ test: /\.ts$/, use: "ts-loader" },
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".ts"],
	},
	plugins: [new HtmlWebpackPlugin()],
	optimization: {
		usedExports: true,
	},
};
