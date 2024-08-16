const express=require('express');

const router=express.Router();


router.get('/',(req,res,next)=>{
    res.send(`
        <form action="/login" method="POST">
            <input type="text" name="UserName">
            <button type="submit">Enter</button>
        </form>
        <script>
            document.querySelector('form').onsubmit = function(event) {
                const userName = document.querySelector('input[name="UserName"]').value;
                localStorage.setItem('userName', userName); // Save the UserName to local storage
            };
        </script>
    `);
});

router.post('/',(req,res,next)=>{
    const name=req.body;
    console.log(name);//insate of log i want to save it in local storage
    res.redirect('/');
});

module.exports=router;