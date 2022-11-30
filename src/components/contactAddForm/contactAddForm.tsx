import React from 'react';
import { useState } from "react"
import { useCreateContactMutation, useGetAllContactsQuery } from '../../services/contacts.endpoint.service';
import { IContact } from '../../interfaces/contact.interface';
import { nanoid } from 'nanoid'


export const ContactAddForm: React.FC = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [company, setCompany] = useState("")

    const { data } = useGetAllContactsQuery();
    const [createContact] = useCreateContactMutation();

    

    const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        
        const { name, value } = e.currentTarget
        
        switch (name) {
            case "name":
                setName(value)
                break;
            case "lastName":
                setLastName(value)
                break;
            case "email":
                setEmail(value)
                break;
            case "company":
                setCompany(value)
                break;
            case "phoneNumber":
                setPhoneNumber(value)
                break;
            default:
                return;
        }
    };

    const resetState = () => {
            setName("")
            setLastName("")
            setEmail("")
            setPhoneNumber("")
            setCompany("")
    }

    const addNewContact = (newContact: IContact) => {

        const contactName: any = 
            data && data.map(contact =>
                contact.name.toLowerCase())

        if (!contactName.includes(newContact.name.toLowerCase())) {
            createContact(newContact)

            resetState()

        } else {
            return alert(`${newContact.name} is allready in contacts`)
        } 
    };

    const onSubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const newContact: IContact = {
            id: nanoid(), 
            name: name,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            company: company,
        }

        addNewContact(newContact)
    };

    return (
        <form onSubmit={onSubmitHandle}>
            <label>
                <input
                onChange={onInputChange}
                required    
                type="text" 
                name='name'
                value={name}
                placeholder='Type your name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob, Charles de Batz de Castelmore"
                />
            </label>
            <label>
                <input
                onChange={onInputChange}    
                required
                type="text" 
                name='lastName'
                value={lastName}    
                placeholder='Type your last name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Mercer, d'Artagnan"
                />
            </label>
            <label>
                <input
                onChange={onInputChange}    
                required
                type="email"
                name='email'
                value={email}    
                placeholder='Type your email'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Email may contain only letters, digits, without spaces. For example test123@mail.io"
                />
            </label>
            <label>    
                <input
                onChange={onInputChange}    
                required
                type="text"
                name='phoneNumber' 
                value={phoneNumber}
                placeholder='Type your phone number'
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses"
                />
            </label>
            <label>
                <input
                onChange={onInputChange}    
                required
                type="text" 
                name='company'
                value={company}    
                placeholder='Type your company name'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Company name may contain only letters, apostrophe, dash and spaces."
                />
            </label>
            
            <button
                type='submit'
                
            >
                Add new Contact
            </button>
            
        </form>
    )
}