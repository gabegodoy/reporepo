// "use client"

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// const queryClient = new QueryClient()

// export const ReactQueryProvider = ({children}: {children: React.ReactNode}) => {
//     return(
//     <QueryClientProvider client={queryClient}>
//         {children}
//     </QueryClientProvider>
//     )
// }

"use client"

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const ReactQueryProvider = ({children}: {children: React.ReactNode}) => {
    const [client] = useState(new QueryClient())

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
} 
