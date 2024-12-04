const server=require('express')
const app=server()
const path=require('path')

app.set("view engine",'pug')
app.use(server.static(path.join(__dirname,'public')))

app.get("/pug",(req,res)=>{
    res.render('contact')
})
app.listen(7001)