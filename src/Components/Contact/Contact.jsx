import { useRef } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const form = useRef();
     const handleSubmit=e=>{
        e.preventDefault()
    
        emailjs.sendForm('service_d1adzi8', 'template_kkxgm6n',form.current, 'kmjLTcZHbdlo7Xnme')
        .then(() => {
          toast.success('Successfully Send!')
          form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
// service_d1adzi8
     }
    return (
        <div id="contact" className="max-w-[1300px] mx-auto p-2 mt-8">
          <div><Toaster/></div>
      <h1 className="text-white text-[42px] font-semibold text-center ">Contact</h1>
                <p className="md:text-[20px] text-[17px] text-center  mt-3 leading-8 text-[#F2F3F494]">Feel free to reach out to me for any questions or opportunities!</p>
            <div className='md:mt-8 mt-5 flex justify-center '>
             
          
            <form ref={form} onSubmit={handleSubmit} className="form ">
              <div className="email">Email Me 🚀</div> 
                <input  placeholder='Your Email' className='inputField ' type="email" name="email"  required />

                <input placeholder='Your Name' className='inputField ' type="text" name="user_name"   required/>

                <input placeholder='Subject' className='inputField ' type="text" name="subject" required />
                  
               <div>
               <textarea placeholder="Message" rows="5"  name="message" className="text w-full" required></textarea>
               </div>

                <input type="submit" className="submit cursor-pointer" value="Send"></input>
              </form>
      
            </div>
        </div>
    );
};

export default Contact;