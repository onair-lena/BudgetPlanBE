const sequilize = require('./db');

const { DataTypes } = require('sequelize');

const User = sequilize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Record = sequilize.define('record', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  recordName: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  value: { type: DataTypes.INTEGER },
  currency: { type: DataTypes.STRING },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: {
        args: [['income', 'expense']],
        msg: 'Invalid record type',
      },
    },
  },
  date: { type: DataTypes.DATE },
});

Record.belongsTo(User);

module.exports = {
  User,
  Record,
};
