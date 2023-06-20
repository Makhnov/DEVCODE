const css_colors = {
	'a':
		["aliceblue",
			"antiquewhite",
			"aqua",
			"aquamarine",
			"azure"],
	'b':
		["beige",
			"bisque",
			"black",
			"blanchedalmond",
			"blue",
			"blueviolet",
			"brown",
			"burlywood"],
	'c':
		["cadetblue",
			"chartreuse",
			"chocolate",
			"coral",
			"cornflowerblue",
			"cornsilk",
			"crimson",
			"cyan"],
	'd':
		["darkblue",
			"darkcyan",
			"darkgoldenrod",
			"darkgray",
			"darkgreen",
			"darkkhaki",
			"darkmagenta",
			"darkolivegreen",
			"darkorange",
			"darkorchid",
			"darkred",
			"darksalmon",
			"darkseagreen",
			"darkslateblue",
			"darkslategray",
			"darkturquoise",
			"darkviolet",
			"deeppink",
			"deepskyblue",
			"dimgray",
			"dodgerblue"],
	'f':
		["firebrick",
			"floralwhite",
			"forestgreen",
			"fuchsia"],
	'g':
		["gainsboro",
			"ghostwhite",
			"gold",
			"goldenrod",
			"gray",
			"green",
			"greenyellow"],
	'h':
		["honeydew",
			"hotpink"],
	'i':
		["indianred",
			"indigo",
			"ivory"],
	'k':
		["khaki"],
	'l':
		["lavender",
			"lavenderblush",
			"lawngreen",
			"lemonchiffon",
			"lightblue",
			"lightcoral",
			"lightcyan",
			"lightgoldenrodyellow",
			"lightgray",
			"lightgreen",
			"lightpink",
			"lightsalmon",
			"lightseagreen",
			"lightskyblue",
			"lightslategray",
			"lightsteelblue",
			"lightyellow",
			"lime",
			"limegreen",
			"linen"],
	'm':
		["magenta",
			"maroon",
			"mediumaquamarine",
			"mediumblue",
			"mediumorchid",
			"mediumpurple",
			"mediumseagreen",
			"mediumslateblue",
			"mediumspringgreen",
			"mediumturquoise",
			"mediumvioletred",
			"midnightblue",
			"mintcream",
			"mistyrose",
			"moccasin"],
	'n':
		["navajowhite",
			"navy"],
	'o':
		["oldlace",
			"olive",
			"olivedrab",
			"orange",
			"orangered",
			"orchid"],
	'p':
		["palegoldenrod",
			"palegreen",
			"paleturquoise",
			"palevioletred",
			"papayawhip",
			"peachpuff",
			"peru",
			"pink",
			"plum",
			"powderblue",
			"purple"],
	'r':
		["rebeccapurple",
			"red",
			"rosybrown",
			"royalblue"],
	's':
		["saddlebrown",
			"salmon",
			"sandybrown",
			"seagreen",
			"seashell",
			"sienna",
			"silver",
			"skyblue",
			"slateblue",
			"slategray",
			"snow",
			"springgreen",
			"steelblue"],
	't':
		["tan",
			"teal",
			"thistle",
			"tomato",
			"turquoise"],
	'v':
		["violet"],
	'w':
		["wheat",
			"white",
			"whitesmoke"],
	'y':
		["yellow",
			"yellowgreen"]
};

Vue.createApp({
	data() {
		return {
			index: null,
			bgs: [60, 60],
			colors: ['black', 'black'],
			ct_bool: [false, false],
		};
	},
	computed: {
	},
	methods: {
		card(e) {
			this.index = Array.from(e.target.parentNode.children).indexOf(e.target) - 1;
			this.bgs[this.index] += 40 * this.index + 20;
		},
		toggleClass(e) {
			console.log(this.ct_bool);
			this.index = Array.from(e.target.parentNode.children).indexOf(e.target) - 3;
			this.ct_bool[this.index] = !this.ct_bool[this.index];
			console.log(this.ct_bool);
		}
	},
	watch: {
	},
}).mount('#monApp');

Vue.createApp({
	data() {
		return {
			prompt_txt: "Masquer HelloWorld!",
			prompt_color: "orange",
			bg_color: "orange",
			ct_bool: [false, false],
		};
	},
	computed: {
	},
	methods: {
		toggleColor(e) {
			if (e.target.value === "") {
				this.bg_color = "orange";
			}

			for (color in css_colors) {
				if (e.target.value.charAt(0) === color) {
					css_colors[color].forEach(color => {
						console.log(color);
						if (color === e.target.value) {
							this.bg_color = e.target.value;
						}
					});
					return;
				}
			}

		},
		toggleClass(e) {
			if (e.target.value.toLowerCase() === "hello") {
				this.ct_bool[0] = true;
				this.ct_bool[1] = false;
			} else if (e.target.value.toLowerCase() === "world") {
				this.ct_bool[0] = false;
				this.ct_bool[1] = true;
			} else {
				this.ct_bool[0] = false;
				this.ct_bool[1] = false;
			}
		},
		prompt() {
			const divz = document.querySelectorAll('div');
			if (divz[5].style.visibility === "") {
				divz[5].style.visibility = "hidden";
				this.prompt_txt = "Afficher HelloWorld!";
				this.prompt_color = "greenyellow";
			} else {
				divz[5].style.removeProperty('visibility');
				this.prompt_txt = "Masquer HelloWorld!";
				this.prompt_color = "orange";
			}
		},
	},
	watch: {
	},
}).mount('#monAutreApp');

