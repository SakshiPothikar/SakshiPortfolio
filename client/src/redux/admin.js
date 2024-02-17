import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminapi = createApi({
    reducerPath: "adminapi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/admin" }),
    tagTypes: ["userdata"],
    endpoints: (builder) => {
        return {
            addAdmin: builder.mutation({
                query: contactData => {
                    return {
                        url: "/post-email",
                        method: "POST",
                        body: contactData
                    }
                },
                // providesTags: ["userdata"]
            }),


        }
    }
})

export const { useAddAdminMutation } = adminapi
