const mongoose = require('mongoose');

async function conectar(){
await mongoose
  .connect('mongodb://JimmyVazz:290498..jimmy@ds145786.mlab.com:45786/users-db', {useNewUrlParser: true})
  .then(x => {
    console.log(`Conectado to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
}


module.exports={conectar};