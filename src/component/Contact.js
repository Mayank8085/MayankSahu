import React from 'react';
import Contactcard from './ContactCard';

const Contact = () => {
    return (
        <footer className='container pt-3 my-5 text-center' id="contact">
           <h1 className='mt-5 p-5'>Contact Me</h1>
           <div className='row my-5' >
               <Contactcard/>
               <Contactcard
               title='Email'
               icon='fa-envelope'
               main1='mayanksahu1806@gmail.com'
               main2='mayank.21910632@viit.ac.in'
               />
               <Contactcard
               title='Phone'
               icon='fa-phone-alt'
               main1='+91 930-753-1964'
               main2='+91 932-984-9030'
               />
           </div>

        </footer>  
    );
}

export default Contact;
