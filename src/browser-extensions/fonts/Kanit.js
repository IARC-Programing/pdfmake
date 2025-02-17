var fs = require("fs");

var fontContainer = {
	vfs: {
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
		Kanit: {
			normal: "Kanit-Light.ttf",
			bold: "Kanit-Regular.ttf",
			italics: "Kanit-LightItalic.ttf",
			bolditalics: "Kanit-Italic.ttf",
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
