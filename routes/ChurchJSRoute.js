const express = require('express');

//Church Controllers
const churchController = require('../zcontrollers/ChurchController');

const route = express.Router();

//create Church data
route.post('/add-members',churchController.addChurchMember);

//Read Church data
route.get('/', churchController.findChurchMembers);

//Read church data by id
route.get('/:id', churchController.findChurchMembersByID)

//Update an individual church data
route.patch('/edit/:id', churchController.updateChurchMemberData)

//Delete a specific church member data
route.delete('delete/:id', churchController.deleteChurchMemberDataByID)

module.exports = route