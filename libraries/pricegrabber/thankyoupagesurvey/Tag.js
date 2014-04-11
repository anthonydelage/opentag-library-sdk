//:include tagsdk-current.js
var version = "";
var classPath = "pricegrabber.thankyoupagesurvey" + version;

qubit.opentag.LibraryTag.define(classPath + ".Tag", {
	config: {
		/*DATA*/
		name: "Thank You Page Survey",
		async: true,
		description: "Adjust the values of popup_pos_x, popup_pos_y to change the location of the popup layer on your confirmation page",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/price_grabber.png",
		locationDetail: "",
		isPrivate: false,
		url: "https://www.pricegrabber.com/rating_merchrevpopjs.php?retid=${account_number}",
		usesDocWrite: false,
		parameters: [{
			name: "PriceGrabber Account Number",
			description: "",
			token: "account_number",
			uv: ""
		}, {
			name: "PriceGrabber Popup X",
			description: "",
			token: "x",
			uv: ""
		}, {
			name: "PriceGrabber Popup Y",
			description: "",
			token: "y",
			uv: ""
		}, {
			name: "Order ID",
			description: "",
			token: "order_id",
			uv: "universal_variable.transaction.order_id"
		}, {
			name: "PriceGrabber Popup Email",
			description: "",
			token: "email",
			uv: "universal_variable.user.email"
		}]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		window.popup_pos_x = Number("" + this.valueForToken("x") + "");
		window.popup_pos_y = Number("" + this.valueForToken("y") + "");

		window.popup_order_number = "" + this.valueForToken("order_id") + "";
		window.popup_email = "" + this.valueForToken("email") + "";


		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});