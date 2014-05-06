//:include tagsdk-current.js
var tagVersion = "";
var classPath = "snowplowanalytics.snowploweventtracker" + "." + tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Snowplow EventTracker",
		async: true,
		description: "Tag for getting SnowPlow to track all UV events into your custom SnowPlow system. Must be set to depend on the SnowPlow PageTracker.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/snowplow.png",
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
		window.uv_listener.push(['on', 'event',
			function(event) {
				if (event && event.type && event.type === "struct") {
					_snaq.push(['trackStructEvent', event.category || "", event.action || "",
						event.label || "", event.property || "", event.value || ""
					]);
				}
			}
		]);

		window.uv_listener.push(['on', 'event',
			function(event) {
				if (event && event.type && event.type === "unstruct") {
					_snaq.push(['trackUnstructEvent', event.name || "", event.properties || {}]);
				}
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