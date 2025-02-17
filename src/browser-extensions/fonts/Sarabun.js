var fs = require("fs");

var fontContainer = {
	vfs: {
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
	},
	fonts: {
		Sarabun: {
			normal: "Sarabun-Light.ttf",
			bold: "Sarabun-Regular.ttf",
			italics: "Sarabun-LightItalic.ttf",
			bolditalics: "Sarabun-Italic.ttf",
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
