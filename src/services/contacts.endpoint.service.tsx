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
            query: () => ({
                url: `contacts`,
                method: 'GET'
            }),
            providesTags: [TAG_CONTACTS]
        }),
        createContact: builder.mutation<IContact, void>({
            query: newContact => ({
                url: `contacts`,
                method: 'POST',
                body: newContact,
            }),
        invalidatesTags: [TAG_CONTACTS],
        }),
        }
    )
})


export const { useGetAllContactsQuery, useCreateContactMutation } = contactsApi;









