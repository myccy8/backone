/**
 * Created by BillLin on 2015/2/28.
 */
App.Models.Employee = Backbone.Model.extend({
  // 模型值校验
  validate:function(attrs){
    for(var key in attrs){
      if(attrs[key] === ''){
        return key + "不能为空";
      }
      if(key == 'age' && isNaN(attrs.age)){
        return "年龄必须是数字啊";
      }
    }
  }
});
