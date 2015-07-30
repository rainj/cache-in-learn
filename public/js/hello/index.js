(function($) {
	Reveal.initialize({
		controls: true,
		progress: true,
		history: true,
		center: true,

		transition: 'convex', // none/fade/slide/convex/concave/zoom

		// Optional reveal.js plugins
		dependencies: [
			{ 
				src: '/components/revealjs/lib/js/classList.js', 
				condition: function() { return !document.bodyclassList; } 
			},
			{ 
				src: '/components/revealjs/plugin/markdown/marked.js', 
				condition: function() { return !!document.querySelector( '[data-markdown]' ); } 
			},
			{ 
				src: '/components/revealjs/plugin/markdown/markdown.js', 
				condition: function() { return !!document.querySelector( '[data-markdown]' ); } 
			},
			{ 
				src: '/components/revealjs/plugin/highlight/highlight.js', 
				async: true, 
				condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } 
			},
			{ 
				src: '/components/revealjs/plugin/zoom-js/zoom.js', 
				async: true 
			},
			{ 
				src: '/components/revealjs/plugin/notes/notes.js', 
				async: true 
			}
		]
	});
}(jQuery));

