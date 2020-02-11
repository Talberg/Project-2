module.exports = function (sequelize, Sequelize) {
    const cannabis = sequelize.define("cannabis", {
        Strain: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey:true
        },
        Type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Rating: {
            type: Sequelize.DECIMAL,
            allowNull: true
        },
        Effects: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Flavor: {
            type: Sequelize.STRING,
            allowNull: true
        },
        Description: {
            type: Sequelize.STRING,
            allowNull: true
        }

    },
        {
            timestamps: false,
            
        }
    )
    return cannabis
}