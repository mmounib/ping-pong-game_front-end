import axios from "axios";
import { createContext, useState, useEffect } from "react";

import { Cookies, useCookies } from "react-cookie";


const AuthContext = createContext({});

export const AuthProvider: any = ( {children}: any ) => {

    // const [authState, setAuthState] = useState(null);

    // const [cookie, setCookie, removeCookie] = useCookies(["userTokens"]);

    // useEffect(() => {
    //     checkAuth();
    // }, []);

    // const checkAuth = async () => {
        
    //     try {
            
    //         const response = await axios.get('/auth/callback');
    //         const data = response.data.token;

    //         // {
    //         //     access_token: aklsjdflkasjdf,
    //         //     refresh_token: ;ljsfklajsdf,
    //         //     user:{
    //         //         userInfo...;
    //         //     }
    //         // }
            
    //         setCookie("userTokens", data, { path: '/', httpOnly: true});


    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [cookie, setCookie, removeCookie] = useCookies(["userTokens"]);

    
    const checkAuth = async () => {
        try {
            const responseData = await axios.get("/auth/callback");

            const { tokens, userInfo } = responseData.data;
            
            setAccessToken(tokens);
            setRefreshToken(tokens);
            setIsAuthenticated(true);

            Cookies.


        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <AuthContext.Provider value={{  }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

// check if the user has cookie--> 1 - true: extract the tokens and send them to the route /auth/intra.
                                    //2 false:send a request to the route /auth/callback, and wait for the response that contains the access_token and refresh_token.

// auth/callback --> the user has no cookie
//auth/intra ---> the user has a cookie
//auth/refresh-token --> the user access_token has expired, and need a new access_token via refresh_token.