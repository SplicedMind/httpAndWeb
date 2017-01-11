(function(){
  'use strict';

  var jasmine = require('jasmine');

  var myApp = require('../app/httpWeb.js');

  describe("Returns the funding details of the domain input: ", function() {
    describe("Case for valid domains", function() {

      it("should return {`amount_total`:13000000,'currency':'USD','status':'Early Stage','name':'Andela','domain':'andela.com} for andela.com", function() {
        expect(myApp.httpWeb("andela.com")).toEqual('{"amount_total":13000000,"currency":"USD","status":"Early Stage","name":"Andela","domain":"andela.com"}');
      });

      it("should return '{'amount_total':2365700000,'currency':n/a,'statu's:'IPO','name':'Facebook','domain':'facebook.com'} for facebook.com", function() {
        expect(myApp.httpWeb('facebook.com')).toEqual('{"amount_total":2365700000,"currency":"n/a","status":"IPO","name":"Facebook","domain":"facebook.com"}');
      });
    });

    describe("Case for invalid domains", function() {

      it("should return {'statusCode':404,'error':'Not Found','message':'we have just started acquiring data on the requested entity. check back soon!`} for ook.com", function() {
        expect(myApp.httpWeb('ook.com')).toEqual('{"statusCode":404,"error":"Not Found","message":"we have just started acquiring data on the requested entity. check back soon!"}');
      });
    });
  });
})();