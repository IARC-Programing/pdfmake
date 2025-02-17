var fs = require("fs");

var fontContainer = {
	vfs: {
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
	},
	fonts: {
		Prompt: {
			normal: "Prompt-Light.ttf",
			bold: "Prompt-Regular.ttf",
			italics: "Prompt-LightItalic.ttf",
			bolditalics: "Prompt-Italic.ttf",
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
