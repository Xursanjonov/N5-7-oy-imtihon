import { tokenApi } from './tokenApi'

export const adminApi = tokenApi.injectEndpoints({
    endpoints: (build) => ({
        getAdmin: build.query({
            query: (params) => ({
                url: '/get/admins',
                params
            }),
            providesTags: ["Admin"]
        }),
        getAdminById: build.query({
            query: (id) => ({
                url: `/get/admin/${id}`
            }),
            providesTags: ["Admin"]
        }),
        createAdmin: build.mutation({
            query: ({ body }) => ({
                url: "/admin/sign-in",
                method: "POST",
                body
            }),
            invalidatesTags: ["Admin"]
        })
    }),
})

export const { useCreateAdminMutation, useGetAdminByIdQuery, useGetAdminQuery } = adminApi