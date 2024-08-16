const express=require('express');
const fs=require('fs')

const router=express.Router();


router.get('/',(req,res,next)=>{

    fs.readFile('./routes/message.txt','utf8',(err,data)=>{
        if(err){
            console.log('file reding error',err);
            return res.status(500).send("Internal Server Error");
        }
        const formattedData = data.split('\n').map(line => `<p>${line}</p>`).join('');

        res.send(`
            ${formattedData}
            <form id="messageForm" action="/" method="POST">
                <input type="text" name="message" placeholder="Enter your message">
                <button type="submit">Send</button>
            </form>
            <script>
                document.getElementById('messageForm').onsubmit = function(event) {
                    const userName = localStorage.getItem('userName') || 'Guest';
                    const messageInput = document.querySelector('input[name="message"]');
                    messageInput.value = userName + ": " + messageInput.value;
                };
            </script>
        `);
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