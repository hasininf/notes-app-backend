const { addNoteHandler, getAllNotesHandler } = require('./handler');
const routes = [
    {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,

    // eslint-disable-next-line no-dupe-keys
    // handler: () => {},
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,

    // handler: () => {},
  },

];
module.exports = routes;