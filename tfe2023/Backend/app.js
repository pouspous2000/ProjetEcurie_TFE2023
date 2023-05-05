const express = require('express');
const Sequelize = require('sequelize');

const app = express();

const sequelize = new Sequelize('db-tfe-2023', 'postgres', 'Lafetas')

const Membre = sequilize.define('membre', {
    id: {
        filed: ' MemberId',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        filed: 'Name',
        type: Sequelize.STRING,
    }

}, {
    timestamps: false
});

app.checkout('api/membrer')