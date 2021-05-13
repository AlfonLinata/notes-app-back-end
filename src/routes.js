/* eslint-disable */
const { 
  addNoteHandler, 
  getAllNotesHandler, 
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require('./handler');

const option = {
  cors: {
    origin: ['*'],
  },
};


const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
      options: option
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
      options : option
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
      options : option
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByIdHandler,
      options : option
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler,
      options : option
    },
  ];
   
module.exports = routes;