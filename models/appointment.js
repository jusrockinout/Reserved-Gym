'use strict';
module.exports = function(sequelize, DataTypes) {
  var appointment = sequelize.define('appointment', {
    time_stamps: DataTypes.DATE,
    duration: DataTypes.INTEGER
  });

  appointment.associate = function(models)
  {
    appointment.belongsTo(models.client);
    appointment.belongsTo(models.equipment);
  };

  return appointment;
};
