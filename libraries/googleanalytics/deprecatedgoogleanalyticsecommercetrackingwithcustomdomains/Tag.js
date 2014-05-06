//:include tagsdk-current.js
var tagVersion = "";
var classPath =
	"googleanalytics.deprecatedgoogleanalyticsecommercetrackingwithcustomdomains" +
	"." +
	tagVersion;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "[DEPRECATED] Google Analytics E-Commerce Tracking with Custom Domains",
		async: true,
		description: "Enables ecommerce tracking of multiple domains within one Google Analytics account.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/GoogleAnalytics.png",
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
		var _this = this;
		d(function() {
			window._gaq = window._gaq || [];
			_gaq.push(['_setAccount', '' + _this.valueForToken("PROFILE_ID")]);
			_gaq.push(['_setDomainName', '' + _this.valueForToken("domainName")]);
			_gaq.push(['_trackPageview']);

			_gaq.push(['_addTrans',
				'' + _this.valueForToken("orderId"),
				'' + _this.valueForToken("storeName"),
				'' + _this.valueForToken("orderTotal"),
				'' + _this.valueForToken("orderTax"),
				'' + _this.valueForToken("orderShipping"),
				'' + _this.valueForToken("orderShippingCity"),
				'' + _this.valueForToken("orderShippingState"),
				'' + _this.valueForToken("orderShippingCountry")
			]);
			var i, ii;
			for (i = 0, ii = _this.valueForToken("itemSkus").length; i < ii; i += 1) {
				_gaq.push(['_addItem',
					'' + _this.valueForToken("orderId"),
					_this.valueForToken("itemSkus")[i],
					_this.valueForToken("itemNames")[i],
					_this.valueForToken("itemCategories")[i],
					_this.valueForToken("itemUnitPrices")[i],
					_this.valueForToken("itemQuantities")[i]
				]);
			}
			_gaq.push(['_trackTrans']);

			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
				'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
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