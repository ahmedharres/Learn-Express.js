const looger = (req,res,next)=>{
    const method = req.method 
        const url = req.url 
        const time = new Date().getDate()
        const day = new Date().getDay()
        const year = new Date().getFullYear()
        console.log(method,url,time,day,year)
        next()    
    }
    module.exports = looger