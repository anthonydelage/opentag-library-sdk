//:include tagsdk-current.js
var tagVersion = "";
var classPath =
	"googleuniversalanalytics.googleuniversalanalyticsautosenduvevents" + "." +
	tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Google Universal Analytics - auto send UV events",
		async: true,
		description: "Automatically send UV events as GA events using Universal Analytics. Depends on the main Universal Analytics script.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		parameters: [

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

		window.uv_listener.push(["on", "event",
			function(event) {

				var data = {
					hitType: "event",
					eventCategory: event.category,
					eventAction: event.action
				};

				// Add label and value
				if (event.label !== undefined) {
					data.eventLabel = event.label;
				}
				if (event.value !== undefined) {
					data.eventValue = event.value;
				}

				// Send the event
				ga("send", data);

			}
		]);

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