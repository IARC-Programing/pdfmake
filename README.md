# PDFMake Thaifont 2

Adding Thai Language and Thai Fonts Sarabun, Kanit, Prompt, Angsana and Fontawesone based on pdfMake.

To Install Package

```
npm i pdfmake-thaifont-2
```

Add fonts config file like that

```
pdfMake.fonts = {
  Sarabun: {
		normal: "Sarabun-Light.ttf",
		bold: "Sarabun-Regular.ttf",
		italics: "Sarabun-LightItalic.ttf",
		bolditalics: "Sarabun-Italic.ttf",
	},
}
```

## Available Fonts

### Sarabun (Google Fonts)

```
 Sarabun: {
		normal: "Sarabun-Light.ttf",
		bold: "Sarabun-Regular.ttf",
		italics: "Sarabun-LightItalic.ttf",
		bolditalics: "Sarabun-Italic.ttf",
	},
```

### Kanit

```
Kanit: {
		normal: "Kanit-Light.ttf",
		bold: "Kanit-Regular.ttf",
		italics: "Kanit-LightItalic.ttf",
		bolditalics: "Kanit-Italic.ttf",
	}
```

### Prompt

```

	Prompt: {
		normal: "Prompt-Light.ttf",
		bold: "Prompt-Regular.ttf",
		italics: "Prompt-LightItalic.ttf",
		bolditalics: "Prompt-Italic.ttf",
	}
```

### Impac

```
{
	 Impac: {
    normal: 'impac.ttf',
    bold: 'impac.ttf',
    italics: 'impac.ttf',
    bolditalics: 'impac.ttf',
  },
}
```

### AngsanaNew

```
 AngsanaNew: {
    normal: 'AngsanaNew.ttf',
    bold: 'AngsanaNew_bold.ttf',
    italics: 'AngsanaNew.ttf',
    bolditalics: 'AngsanaNew.ttf',
  },
```

### FontAwesome

```
 FontAwesome: {
    normal: 'FontAwesome_regular.ttf',
    bold: 'FontAwesome_regular.ttf',
    italics: 'FontAwesome_regular.ttf',
    bolditalics: 'FontAwesome_regular.ttf',
  },
```

### THSarabunNew

```
THSarabunNew: {
    normal: 'THSarabunNew.ttf',
    bold: 'THSarabunNew Bold.ttf',
    italics: 'THSarabunNew-Italic.ttf',
    bolditalics: 'THSarabunNew-BoldItalic.ttf',
  },
```

Implemented with ❤ By Intelligent Automation Research Center Prince of Songkla University

---

# pdfmake [![Node.js CI][githubactions_img]][githubactions_url] [![GitHub][github_img]][github_url] [![npm][npm_img]][npm_url] [![Bower][bower_img]][bower_url] [![Packagist][packagist_img]][packagist_url] [![CDNJS][cdnjs_img]][cndjs_url]

[githubactions_img]: https://github.com/bpampuch/pdfmake/workflows/Node.js%20CI/badge.svg?branch=master
[githubactions_url]: https://github.com/bpampuch/pdfmake/actions
[github_img]: https://img.shields.io/github/release/bpampuch/pdfmake.svg
[github_url]: https://github.com/bpampuch/pdfmake/releases/latest
[npm_img]: https://img.shields.io/npm/v/pdfmake.svg?colorB=0E7FBF
[npm_url]: https://www.npmjs.com/package/pdfmake
[bower_img]: https://img.shields.io/bower/v/pdfmake.svg?colorB=0E7FBF
[bower_url]: https://github.com/bpampuch/pdfmake
[packagist_img]: https://img.shields.io/packagist/v/bpampuch/pdfmake.svg?colorB=0E7FBF
[packagist_url]: https://packagist.org/packages/bpampuch/pdfmake
[cdnjs_img]: https://img.shields.io/cdnjs/v/pdfmake.svg?colorB=0E7FBF
[cndjs_url]: https://cdnjs.com/libraries/pdfmake

PDF document generation library for server-side and client-side in pure JavaScript.

Adding Thai Language and Thai Fonts Sarabun, Kanit and Prompt based on pdfMake.

Check out [the playground](http://bpampuch.github.io/pdfmake/playground.html) and [examples](https://github.com/bpampuch/pdfmake/tree/master/examples).

#### This is unstable master branch for version 0.3.x, for stable use version 0.2.x see [branch 0.2](https://github.com/bpampuch/pdfmake/tree/0.2) or older version 0.1.x see [branch 0.1](https://github.com/bpampuch/pdfmake/tree/0.1).

### Features

- line-wrapping,
- text-alignments (left, right, centered, justified),
- numbered and bulleted lists,
- tables and columns
  - auto/fixed/star-sized widths,
  - col-spans and row-spans,
  - headers automatically repeated in case of a page-break,
- images and vector graphics,
- convenient styling and style inheritance,
- page headers and footers:
  - static or dynamic content,
  - access to current page number and page count,
- background-layer,
- page dimensions and orientations,
- margins,
- custom page breaks,
- font embedding,
- support for complex, multi-level (nested) structures,
- table of contents,
- helper methods for opening/printing/downloading the generated PDF,
- setting of PDF metadata (e.g. author, subject).

## Documentation

Documentation URL: https://pdfmake.github.io/docs/

## Building from sources

using npm:

```
git clone https://github.com/bpampuch/pdfmake.git
cd pdfmake
npm install
npm run build
```

using yarn:

```
git clone https://github.com/bpampuch/pdfmake.git
cd pdfmake
yarn
yarn run build
```

## License

MIT

## Authors

- [@bpampuch](https://github.com/bpampuch) (founder)
- [@liborm85](https://github.com/liborm85)

pdfmake is based on a truly amazing library [pdfkit](https://github.com/devongovett/pdfkit) (credits to [@devongovett](https://github.com/devongovett)).

Thanks to all contributors.
