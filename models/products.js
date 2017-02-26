module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    published: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rating_cache: {
      type: DataTypes.FLOAT(2, 1),
      allowNull: false,
      defaultValue: 3.0
    },
    rating_count: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: 0.0
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pricing: {
      type: DataTypes.FLOAT(9, 2),
      allowNull: false,
      defaultValue: 0.0
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    long_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      classMethods: {
        associate: function(models) {
          // Associating Products with Reviews
          // When a Product is deleted, also delete any associated Reviews          // A User (foreignKey) is required or a Product will not be rented
          Product.hasMany(models.Review, {
            onDelete: "cascade"
          });
        }
      }
    }
    )
  return Product;
  };
    