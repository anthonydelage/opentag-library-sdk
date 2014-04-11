//:include tagsdk-current.js
var version = "";
var classPath = "quantcast.quantcastwebmeasurement" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "QuantCast Web Measurement",
		async: true,
		description: "Provides audience information showcasing your website’s traffic, demographic, geographic, affinities and business stats.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/quantcast.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [{
			name: "Account Number",
			description: "Your QuantCast account number",
			token: "id",
			uv: ""
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window._qevents = window._qevents || [];

		(function() {
			var e = document.createElement("script");
			e.src = (document.location.protocol === "https:" ? "https://secure" :
				"http://edge") + ".quantserve.com/quant.js";
			e.async = true;
			document.getElementsByTagName("head")[0].appendChild(e);
			_qevents.push({
				qacct: "" + this.valueForToken("id") + ""
			});
		})();


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