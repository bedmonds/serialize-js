/**
sanity.js
Convenient aliases for common Javascript functions.
---
Copyright (c) 2017 Brian Edmonds <brian@bedmonds.net>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to
deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// Because I really hate typing long names.
var $mktxt = document.createTextNode.bind(document);
var $id = document.getElementById.bind(document);

function $e(element, name, callback) {
	element.addEventListener(name, callback);
};

// Run +fn+ with each element of +arr+ passed as an argument.
function $each(arr, fn) {
	for (var i = 0, len = arr.length; i < len; ++i) {
		fn(arr[i]);
	}
};

// Create a new DOM element of +tagName+.
// +content+ can be either a single TextNode ($mktxt) or HTMLElement ($mkele),
// or an array of them.
function $mkele(tagName, content, options){
	// Safari, IE and Opera do not support default parameters.
	content = content || null;
	options = options || {};

	var el = document.createElement(tagName);

	if (options.className !== undefined) el.classList.add(options.className);
	if (options.id !== undefined) el.id = options.id;

	if (options.html !== undefined) {
		for (var key in options.html) {
			el[key] = options.html[key];
		}
	}

	if (content === null) return el;

	if (content.constructor === Array) {
		content.map(function(i){ el.appendChild(i); });
	} else {
		el.appendChild(content);
	}

	return el;
}
