import React from 'react';
import { BtnSubmit } from '../btnSubmit/btnSubmit.component';

export const ContactAddForm: React.FC = () => {
    return (
        <form>
            <label>
                <input
                required    
                type="text" 
                name='name' 
                placeholder='Type your name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob, Charles de Batz de Castelmore"
                />
            </label>
            <label>
                <input 
                required
                type="text" 
                name='lastName' 
                placeholder='Type your last name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Mercer, d'Artagnan"
                />
            </label>
            <label>
                <input 
                required
                type="email"
                name='email' 
                placeholder='Type your email'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Email may contain only letters, digits, without spaces. For example test123@mail.io"
                />
            </label>
            <label>    
                <input 
                required
                type="number
                " name='phoneNumber' 
                placeholder='Type your phone number'
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses"
                />
            </label>
            <label>
                <input 
                required
                type="text" 
                name='company' 
                placeholder='Type your company name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Company name may contain only letters, apostrophe, dash and spaces."
                />
            </label>
            <BtnSubmit />
            
        </form>
    )
}