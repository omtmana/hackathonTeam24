import { useState } from 'react'
import '../style/contact.css'

const Contact = () => {
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [email, setEmail] = useState('')
   const [comment, setComment] = useState([])


   const handleSubmit = ((e) => {
      e.preventDefault()
      // setFirstName('');
      // setLastName('');
      // setEmail('');
      // setTextBox('');

      // fetch('http://localhost:3000/comment', {
      //    method: "POST",
      //    headers: {
      //       "Content-Type": "application/json"
      //    },
      //    body: JSON.stringify({
      //       firstName: firstName,
      //       lastName: lastName,
      //       email: email,
      //       textBox: textBox
      //    }),
      // })
      //    .then((res) => res.json())
      //    .then((newComment) => handleAddComment(newComment))
   })

   return (
      <div className="contact">
         <div className='contact-container'>
            <form>
               <input
                  type='text'
                  name='first name'
                  placeholder="First Name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
               />
               <input
                  type='text'
                  name='last name'
                  placeholder='Last Name'
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
               />
               <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <input
                  type='text'
                  name='comment'
                  placeholder='Write your comment here'
                  value={comment}
                  onChange={e => setComment(e.target.value)}
               />
            </form>
            <button onSubmit={handleSubmit}> Submit </button>

         </div>
      </div>
   )
}

export default Contact;