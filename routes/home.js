const express=require('express');
const fs=require('fs')

const router=express.Router();


router.get('/',(req,res,next)=>{

    fs.readFile('./routes/message.txt',(err,data)=>{
        if(err){
            console.log('file reding error',err);
            return res.status(500).send("Internal Server Error");
        }
        res.send(`<p>${data}</p><form action="/" method="POST" ><input type="text" name="message"><button type="submit">send</button></form>`);
    });

    
});


router.post('/',(req,res,next)=>{

    const data=req.body.message;

    fs.appendFile("./routes/message.txt", data + "\n", (err) => {
        if (err) {
            console.error("Error appending to file", err);
            return res.status(500).send("Internal Server Error");
        }
    
        console.log("Data appended to file successfully");
        res.redirect('/');
    });
    
});

module.exports=router;