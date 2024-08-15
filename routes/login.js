const express=require('express');

const router=express.Router();


router.get((req,res,next)=>{
    res.send('<form action="/login" method="POST" ><input type="text" name="UserName"><button type="submit">Enter</button></form>');
});

router.post((req,res,next)=>{
    const nme=req.body;
    console.log(name);//insate of log i want to save it in local storage
    res.redirect('/');
});

module.exports=router;