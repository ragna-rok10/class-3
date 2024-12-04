const server=require('express')
const app=server()
const path=require('path')
const views=path.join(__dirname,'views')
const about=`${views}/about.html`

const port=6009



app.use(server.static(views))
app.get("/about",(req,res)=>{
res.sendFile(about)
})
app.listen(port,(err)=>{
if(!err) console.log(`${port} is running`)
})
