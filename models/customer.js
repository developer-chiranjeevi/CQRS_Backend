module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      customer_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      address_line_1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_line_2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_distric: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address_pincode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
};