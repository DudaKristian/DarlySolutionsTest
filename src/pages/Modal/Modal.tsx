import React from 'react';
import { ContactAddForm } from '../../components/contactAddForm/contactAddForm';

export const Modal: React.FC = () => {
    return (
        <div>
            <p>This is Modal component</p>
            <ContactAddForm/>
        </div>
    )
}