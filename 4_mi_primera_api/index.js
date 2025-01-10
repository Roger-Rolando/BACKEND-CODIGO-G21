import express from 'express';

const servidor = express();


servidor.listen(3000, ()=> {
    console.log("servidor corriendo exitosamente")
});