// eslint-disable-next-line func-names
module.exports = function(sequelize, Sequelize) {
  const User = sequelize.define("User", {
    email: { type: Sequelize.STRING, validate: { isEmail: true } },
    password: { type: Sequelize.STRING, allowNull: false },
  });
  return User;
};
