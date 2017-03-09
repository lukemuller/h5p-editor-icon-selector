H5P Editor Icon Selector
==========

A visual icon selector for the H5P Editor. Wrapping micc83 and swashata's jQuery
fontIconPicker found here: https://github.com/micc83/fontIconPicker

## Usage

In your semantics.json set:
```json
"widget": "iconSelector"
```
It is possible to toggle displaying the empty icon by adding the emptyIcon attribute to your semantics.json. E.g:
```json
"widget": "iconSelector",
"fontIconPicker": {
	"emptyIcon": true
}
```

## License

(The MIT License)

Copyright (c) 2017 Luke Muller

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.