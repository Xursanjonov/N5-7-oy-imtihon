import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { logout } from '../slices/authSlice';

const baseQuery = async (args, tokenApi, extraOptions) => {
    const { dispatch } = api
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "https://trade.namtech.uz",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("new-auth-token")
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    });

    const result = await rawBaseQuery(args, tokenApi, extraOptions);

    if (result.error) {
        const { status } = result.error;
        if (status === 401 || status === 403) {
            console.error('Unauthorized access - Redirecting to login...');
            dispatch(logout())
        }
    }
    return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const tokenApi = createApi({
    reducerPath: 'myTokenApi',
    baseQuery: baseQueryWithRetry,
    tagTypes: ["Admin"],
    endpoints: () => ({}),
})