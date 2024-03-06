const nodeMailer = require('nodemailer')

const sendEmail = async (subjext)=>{
   try {
        const transporter = nodeMailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:'michaelbaccin@gmail.com',
                pass:'yraamkyuyguqcpin'
            }
        })

       const sendWelcomeEmail = (email,name)=>{
            transporter.sendMail({
                to:email,
                from: 'michaelbaccin@gmail,com',
                subject: 'Thanks for joining us!',
                text:`Welcome to the app ${name}!  let me kow how you get along with the app!`

            })
       }

       const sendDeleteMail = (email,name)=>{
            transporter.sendMail({
                to:email,
                from: 'michaelbaccin@gmail,com',
                subject: 'We\'re sorry to see you going away!',
                text:`We're very sorry ${name} to see you going away! We'll hope to se you again!`
            })
       }

       module.exports={
            sendWelcomeEmail,
            sendDeleteMail
       }

       /*
       const message = {
           subject: 'this is my first creation',
           from: 'michaelbaccin@gmail,com',
           to:'info@michaelbaccin.com',
           text: 'ciao bello!'
       }


       const info= transporter.sendMail(message)
       console.log('message sent!', info)

        */
   }
   catch (e){
        console.log(e)
   }

}

sendEmail('info@michaelbaccin.com','test ciao Myco')


