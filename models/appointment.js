'use strict';
module.exports = function(sequelize, DataTypes) {
  var appointment = sequelize.define('appointment', {
    time_stamps: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        appointment.hasOne(models.client);
        appointment.hasOne(models.equipment);
      }
    }
  });
  return appointment;
};