import { createContext, useState } from "react";

type CompanyType = {
    name: string
}

type PropsCompanyContext = {
    state: CompanyType;
    setState: React.Dispatch<React.SetStateAction<CompanyType>>
}

const DEFAULT_VALUE = {
    state: {
      name: "Empty",
    },
    setState: () => {}, //função de inicialização
};

const CompanyContext = createContext<PropsCompanyContext>(DEFAULT_VALUE)

const CompanyContextProvider: React.FC = ({ children }) => {
    const [state, setState ] = useState(DEFAULT_VALUE.state)

    return ( 
        <CompanyContext.Provider
            value={{
                state, 
                setState
            }}
        >{children}
        </CompanyContext.Provider>
    )
}

export { CompanyContextProvider }
export default CompanyContext