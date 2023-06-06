import axios from "axios";
import { createContext, useState, useEffect } from "react";


const AuthContext = createContext({});

export const AuthProvider: any = ( {children}: any ) => {

    const [authState, setAuthState] = useState(null);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const response = await axios.get('/auth/intra');
            const data = response.data.token;

            
        } catch (error) {
            
        }
    }
    
    
    return (
        <AuthContext.Provider value={{ authState }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext