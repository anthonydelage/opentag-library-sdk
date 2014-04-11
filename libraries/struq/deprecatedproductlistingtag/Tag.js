//:include tagsdk-current.js
var version = "";
var classPath = "struq.deprecatedproductlistingtag" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "[Deprecated] Product Listing Tag",
		async: true,
		description: "To be placed only on product listing/search result pages",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		isPrivate: true,
		url: "media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js",
		usesDocWrite: false,
		parameters: [{
			name: "Product ID Listing",
			description: "An array containing a list of product IDs",
			token: "product_id_list",
			uv: "universal_variable.listing.items[#].id"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		var _struqPI = _struqPI || [];
		var productArr = [];
		for (var i = 0, ii = this.valueForToken("product_id_list").length; i < ii; i++) {
			productArr.push(this.valueForToken("product_id_list")[i]);
		}
		var productStr = productArr.join(",");

		_struqPI.push(['injectTrackingPixel', {
			trackingPixelId: 'PixelID',
			route: '/s/s/',
			collectData: false,
			data: [{
				title: "si",
				pid: productStr
			}],
			options: {
				timeoutMs: 2000
			}
		}]);


		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});