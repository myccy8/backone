App.Collections.EmployeeList = Backbone.Collection.extend({
  model : Employee,
  // 持久化到本地数据库
  localStorage: new Backbone.LocalStorage("employees")
});
