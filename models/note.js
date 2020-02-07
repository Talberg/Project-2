// eslint-disable-next-line func-names
module.exports = function(sequelize, Sequelize) {
  const Note = sequelize.define("Note", {
    dispensary: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    species: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    method: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    potency: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        isDecimal: true,
      },
    },
    notes: {
      type: Sequelize.STRING(1000),
      allowNull: false,
      validate: {
        len: [1, 1000],
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Note;
};
