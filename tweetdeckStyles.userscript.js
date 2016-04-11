// ==UserScript==
// @name          TweefDeck for TweetDeck
// @namespace     http://userstyles.org
// @description	  Finally, a neat CSS mod for dark TweetDeck. Doesn't require anything else, just "plug-n-play".
// @author        sneaksnake
// @homepage      https://userstyles.org/styles/124042
// @include       http://tweetdeck.twitter.com/*
// @include       https://tweetdeck.twitter.com/*
// @include       http://*.tweetdeck.twitter.com/*
// @include       https://*.tweetdeck.twitter.com/*
// @run-at        document-start
// @version       0.20160208221431
// ==/UserScript==
(function() {var css = [
".tweet-avatar {",
    "margin-top: 2px;",
    "margin-bottom: 2px;",
    "filter: url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale');",
    "filter: grayscale(100%);",
    "-moz-filter: grayscale(100%);",
    "-ms-filter: grayscale(100%);",
    "-o-filter: grayscale(100%);",
    "filter: gray; /* IE6-9 */",
    "-webkit-filter: grayscale(100%);",
    "opacity: 0.4;",
  "}",
    "a {",
    "color: #5f5f6f;",
    "text-decoration: none;",
"}",
 ".is-wide-columns .column {",
    "width: 402px;",
    "margin-right: 6px;",
"}",
    ".media-item {",
    "width: 100%;",
    "height: 100%;",
    "position: relative;",
    "display: block;",
    "margin-top: 10px;",
    "background-repeat: no-repeat;",
    "background-position: 50% 50%;",
    "background-size: cover;",
    "opacity: 0.5;",
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
