App.Models.Team = Backbone.Model.extend({
	defaults : {
		name : ""
	},
	
	initialize : function() {
        this.on('change:name',function(){    //绑定change事件，当数据改变时执行此回调函数

        });
	},
	
	validate : function(attributes){
		if (!!attributes && attributes.name === "teamX") {
			return "Error!";
		}
	}
	

});
