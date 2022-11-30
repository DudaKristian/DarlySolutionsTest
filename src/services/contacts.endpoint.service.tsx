import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { IContact } from '../interfaces/contact.interface';


const TAG_CONTACTS: string = "Contacts";

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: [TAG_CONTACTS],
    endpoints: (builder) => (
        {
            getAllContacts: builder.query<IContact, void>({
            query: () => `contacts`,
            providesTags: [TAG_CONTACTS]
        }),
        }
    )
})


export const { useGetAllContactsQuery } = contactsApi;









