import React from 'react';
import { useGetAllContactsQuery } from '../../services/contacts.endpoint.service';


export const Table: React.FC = () => {

    const { data } = useGetAllContactsQuery()
    

    return (
        <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Last name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
            {data && data.map(
                contact => (
                    <tr>
                        <th>{contact.id}</th>
                        <th>{contact.name}</th>
                        <th>{contact.lastName}</th>
                        <th>{contact.company}</th>
                        <th>{contact.email}</th>
                        <th>{contact.phoneNumber}</th>
                    </tr>    
                )
            )}
        </table>
    )
}