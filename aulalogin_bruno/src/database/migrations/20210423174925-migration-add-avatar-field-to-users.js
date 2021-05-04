'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'users',
        'avatar_id',
      { 
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id'}, // refecia a minha chave extrangeira
        onUpdate: 'CASCADE', //
        onDelete: 'SET NULL',
        allowNull: true,
      }
      )
     
  },

  down: (queryInterface) => {
    queryInterface.dropTable('files');
  }
};
