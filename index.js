import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

const app= express()
const corsOption={
    origin:'*'
}

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption), routes)

app.get('/',(req,res)=>res.send('estamos en el servidor de mi API'))

const server=app.listen(process.env.PORT || 8000,()=>{
    console.log('estas en marcha')
})

export default app;