import { configureStore } from '@reduxjs/toolkit'

import { contactsApi } from './contacts.endpoint.service'

export const store = configureStore({
    reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(contactsApi.middleware),
})


