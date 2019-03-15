const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    add: function(value){
        orm.insertOne(value)
    },
    update:function(value){
        orm.updateOne(value)
    }
}

module.exports = burger