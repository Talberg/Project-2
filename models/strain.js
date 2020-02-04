module.exports = function(sequelize, Sequelize) {
    var Strain = sequelize.define('Strain', {
        dispensary: {
            type: Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        species: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isIn: [['Sativa', 'Hybrid', 'Indica', 'Unknown']]
            }
        },
        potency: {
            type: Sequelize.DECIMAL(10,2),
            allowNull: true,
            validate: {
                isDecimal: true
            }
        },
        notes: {
            type: Sequelize.STRING(1000),
            allowNull: true,
            validate: {
                len: [1, 1000]
            }
        }
    });
    return Strain;
}