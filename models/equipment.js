'use strict';
module.exports = function(sequelize, DataTypes) {
  var equipment = sequelize.define('equipment', {
    machine_name: DataTypes.STRING,
    section: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
equipment.hasMany(models.appointment);

      }
    }
  });
  return equipment;
};