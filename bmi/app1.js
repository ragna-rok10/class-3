const server=require('express')
const app=server()
const path=require('path')
const body=require('body-parser')


//middleware section
app.set("view engine",'ejs')
app.use(server.static(path.join(__dirname,'public')))
app.use(body.urlencoded({
    extended: true
}))

//server section
app.get("/",(req,res)=>{
    res.render('bmi')
})

//user data collection section

app.post("/bmi",(req,res)=>{
    const h=parseFloat(req.body.height);
    const w=parseFloat(req.body.weight);

    const h_converted=h/100;
    const bmi_result =w/(h_converted*h_converted);
    res.send(`<h1 style="color:orange;">YOUR BMI IS(kg/m2): ${bmi_result}</h1>`)
    })

//port created

app.listen(7005)