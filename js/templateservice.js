var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
  this.title = "Home";
  this.meta = "Google";
  this.metadesc = "Home";

  var d = new Date();
  this.year = d.getFullYear();
  this.init = function () {
    this.header = "views/header.html";
    this.sidemenu = "views/sidemenu.html";
    this.content = "views/content/content.html";
  };

  this.decimalExact2 = /^(?:(\d)|(0[0-9]|1[0-5]))(\.\d{2})$/;
  this.onlyDigits = /^[0-9]*$/;
  this.forPanCard = /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/;
  this.forTelephone = /((0\d{10})|((?:\+)91\d{10}))/;
  this.forPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{7,}$/;
  this.changecontent = function (page) {
    this.init();
    var data = this;
    data.content = "views/content/" + page + ".html";
    return data;
  };

  // this.init();

});