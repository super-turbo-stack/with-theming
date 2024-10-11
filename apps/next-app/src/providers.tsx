'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { SessionProvider } from 'next-auth/react'
import { NextThemeProvider } from '@repo/ui'
const queryClient = new QueryClient()
const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <SessionProvider>
                <QueryClientProvider client={queryClient}>
                    <NextThemeProvider 
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange>
                        <RecoilRoot>{children}</RecoilRoot>
                    </NextThemeProvider>
                </QueryClientProvider>
            </SessionProvider>
        </>
    )
}
export default Providers
