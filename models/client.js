'use strict';
module.exports = function(sequelize, DataTypes) {
  var client = sequelize.define('client', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that c is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        len: [6, 6],
        isNumeric: true
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 10],
        isNumeric: true
      }
    }
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        client.hasMany(models.appointments);
      }
    }
  });
  return client;
};
