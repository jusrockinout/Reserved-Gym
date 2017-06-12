'use strict';
module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define('client', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    phone_number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return client;
};