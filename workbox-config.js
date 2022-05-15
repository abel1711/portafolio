module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,html,txt,css,js,jpg,svg}'
	],
	swDest: 'build/sw.js',
	// ignoreURLParametersMatching: [
	// 	/^utm_/,
	// 	/^fbclid$/
	// ],
	swSrc: 'src/sw-template.js'
};