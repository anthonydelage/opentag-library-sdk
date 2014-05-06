//:include tagsdk-current.js
var tagVersion = "";
var classPath = "intelligentfutures.default" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Default",
		async: true,
		description: ".",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/IntelligentFutures.png",
		locationDetail: "",
		isPrivate: true,
		url: "",
		usesDocWrite: false,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		//script must be manually imported! empty parameters entries!
		(function(a) {
			var d = document,
				c = d.createElement("script");
			c.async = !0, c.defer = !0, c.src = a, d.getElementsByTagName("head")[0].appendChild(
				c)
		})((iatDev = (window.location.href.indexOf("iatDev=1") > -1 || document.cookie
				.indexOf("iatDev=1") > -1), "//" + (window.location.protocol == "http:" && !
				iatDev ? "h" : "") + "j.flxpxl.com/176554.js?r=" + Math.random() * 1e16 +
			"&m=${}&a=${}" + (iatDev ? "&d=1" : "")))

		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});