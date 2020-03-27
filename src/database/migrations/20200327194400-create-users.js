'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        user:{
          type: Sequelize.STRING,
          allowNull: false
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password_hash:{
          type: Sequelize.STRING,
          allowNull: false
        },
        birthday:{
          type: Sequelize.STRING,
          allowNull: false
        },
        author: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        },
        created_at: {
           type: Sequelize.DATE 
        },
        updated_at: {
          type: Sequelize.DATE
        }
       });
  },

  down: (queryInterface) => {
      return queryInterface.dropTable('users');
  }
};
