var fs = require("fs");

var fontContainer = {
	vfs: {
		"Roboto-Regular.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Roboto/Roboto-Regular.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Roboto-Medium.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Roboto/Roboto-Medium.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Roboto-Italic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Roboto/Roboto-Italic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Roboto-MediumItalic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Roboto/Roboto-MediumItalic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Sarabun-Light.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Sarabun/Sarabun-Light.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Sarabun-LightItalic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Sarabun/Sarabun-LightItalic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Sarabun-Regular.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Sarabun/Sarabun-Regular.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Sarabun-Italic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Sarabun/Sarabun-Italic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Prompt-Light.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Prompt/Prompt-Light.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Prompt-LightItalic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Prompt/Prompt-LightItalic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Prompt-Regular.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Prompt/Prompt-Regular.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Prompt-Italic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Prompt/Prompt-Italic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Kanit-Light.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Kanit/Kanit-Light.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Kanit-LightItalic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Kanit/Kanit-LightItalic.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Kanit-Regular.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Kanit/Kanit-Regular.ttf",
				"base64"
			),
			encoding: "base64",
		},
		"Kanit-Italic.ttf": {
			data: fs.readFileSync(
				__dirname + "/../../../fonts/Kanit/Kanit-Italic.ttf",
				"base64"
			),
			encoding: "base64",
		},
	},
	fonts: {
		Roboto: {
			normal: "Roboto-Regular.ttf",
			bold: "Roboto-Medium.ttf",
			italics: "Roboto-Italic.ttf",
			bolditalics: "Roboto-MediumItalic.ttf",
		},
	},
};

var _global =
	typeof window === "object"
		? window
		: typeof global === "object"
		? global
		: typeof self === "object"
		? self
		: this;
if (
	typeof _global.pdfMake !== "undefined" &&
	typeof _global.pdfMake.addFontContainer !== "undefined"
) {
	_global.pdfMake.addFontContainer(fontContainer);
}

if (typeof module !== "undefined") {
	module.exports = fontContainer;
}
