import { CompanyContextProvider } from "./company"
import React from "react"
import { UserContextProvider } from "./user/index"

const GlobalContext: React.FC = ({ children }) => {
    return (
        <>
            <UserContextProvider>
                <CompanyContextProvider>{children}</CompanyContextProvider>    
            </UserContextProvider>
        </>
    )
}

export default GlobalContext