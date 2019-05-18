const app = require('./app');
const {conectar} = require('./database')
   

// app.listen(process.env.PORT, ()=>{
//     conectar()
//     .then(x=>{
//         console.log(`Servidor conectado en puerto:${process.env.PORT}`)
//     })
    
// })

async function main(){
    await conectar()
    await app.listen(process.env.PORT)
    console.log(`Servidor conectado en puerto:${process.env.PORT}`)
}
main()