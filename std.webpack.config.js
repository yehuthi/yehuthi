// yarn add --dev webpack webpack-cli typescript ts-loader sass sass-loader css-loader style-loader html-webpack-plugin mini-css-extract-plugin webpack-dev-server
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
				use: [
					dev ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".js", ".ts"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			title: "My Page",
		}),
		new MiniCssExtractPlugin(),
	],
	optimization: {
		usedExports: true,
	},
	devServer: {
		static: "./dist",
	},
};
