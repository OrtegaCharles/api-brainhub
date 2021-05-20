module.exports = (sequelize, type) =>{
    return sequelize.define('User', {
        firstName: {
            type: type.STRING,
            allowNull: false
        },
        lastName: {
            type: type.STRING,
            allowNull: false
        },
        email: {
            type: type.STRING,
            allowNull: false
        },
        birthday: {
            type: type.DATEONLY,
            allowNull: false
        }
    },{

    })
}