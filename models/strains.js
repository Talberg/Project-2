// eslint-disable-next-line func-names
module.exports = function(sequelize, Sequelize) {
  const Strain = sequelize.define(
    "Strain",
    {
      name: Sequelize.STRING,
      species: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return Strain;
};
