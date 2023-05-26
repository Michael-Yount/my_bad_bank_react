import { createContext,useContext,useState} from 'react';

const BankContext = createContext();

export const useBankContext = () => useContext(BankContext);

export const BankProvider = ({ children }) => {
    const [bank, setBank] = useState({
        loggedInUser: null,
        users: [
            {
                username: "michael", password: "abcdabcd", balance: 100,
            },
            {
                username: "sea", password: "abcdabcd", balance: 100,
            },
        ]
    });

    const setLoggedInUser = (username) => {
        setBank({
            ...bank,
            loggedInUser: username,
        });
    }

    const addUser = (user) => {
        setBank({
            ...bank,
            users: [...bank.users, user]
        });
    }

    return (
        <BankContext.Provider value={{
            bank,
            addUser,
            setLoggedInUser,
        }}>
            {children}
        </BankContext.Provider>
    );
}