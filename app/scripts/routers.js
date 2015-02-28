App.Routers.Main = Backbone.Router.extend({

	// Hash maps for routes
	routes : {
		"": "index",
		"add" : "addEmployee",
		"teams/:country" : "getTeamsCountry",
		"teams/:country/:name" : "getTeam",
		"*error" : "fourOfour"
	},

	index: function(){

	},

  addEmployee: function() {
		alert(1)
	},
	getTeamsCountry: function(country) {
		// Get list of teams for specific country
	},
	getTeam: function(country, name) {
		// Get the teams for a specific country and with a specific name
	},
	fourOfour: function(error) {
		// 404 page
	}
});
