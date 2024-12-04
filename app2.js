const server=require('express')
const app=server()
const path=require('path')

app.set('view engine','ejs')
app.use(server.static(path.join(__dirname,'public')))
app.get("/home",(req,res)=>{
    res.render('home')

})
app.listen(7000)