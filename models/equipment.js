'use strict';
module.exports = function(sequelize, DataTypes) {
  var equipment = sequelize.define('equipment', {
    machine_name: DataTypes.STRING,
    section: DataTypes.STRING,
    type: DataTypes.STRING
  });

  equipment.associate = function(models)
  {
    equipment.hasMany(models.appointment);
  }

  return equipment;
};
