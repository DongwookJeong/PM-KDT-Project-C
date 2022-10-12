"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var a = ["유재석", "정준하", "박명수"];
var b = ["정형돈", "하하", "노홍철"];
var c = [].concat(a, b);
console.log(c);
var Monster = /*#__PURE__*/function () {
  function Monster(id, name, type) {
    _classCallCheck(this, Monster);
    this.id;
    this.name;
    this.type;
  }
  _createClass(Monster, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }]);
  return Monster;
}();
var test = new Monster(1, a[0], "MC");
console.log(test);