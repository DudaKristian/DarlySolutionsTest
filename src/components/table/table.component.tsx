import React from 'react';
import { useGetAllContactsQuery } from '../../services/contacts.endpoint.service';
// import {IContact} from '../../interfaces/contact.interface'

export const Table: React.FC = () => {

    const {data} = useGetAllContactsQuery()
    return (
        <div>
            <p>this is table</p>
        </div>
    )
}