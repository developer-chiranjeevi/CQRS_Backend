module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
      order_ID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      customer_ID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      product_ID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mode_of_payment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return User;
};