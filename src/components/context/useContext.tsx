import React from "react";
import axios from "axios";
import { createContext, useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { Cookies, useCookies } from "react-cookie";


interface AuthContextType {
    checkAuth: () => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}
  
const AuthContext = createContext<AuthContextType>({
    checkAuth: () => Promise.resolve(),
    logout: () => {},
    isAuthenticated: false,
});

// const AuthContext = createContext({});

export const AuthProvider: React.FC<{ children: any }> = ( { children } ) => {

    const [accessToken, setAccessToken] = useState<any | null>(null);
    const [refreshToken, setRefreshToken] = useState<any | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [cookie, setCookie, removeCookie] = useCookies(["accessTokenCookie", "refreshTokenCookie"]);

    const navigate = useNavigate();


    const refreshAccessToken = async () => {
        try {
            const response = await axios.get("/auth/refresh-token", {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
            }, });

            // const newAccessToken = response.data.access-token;
            
            // setAccessToken(newAccessToken);

            // setCookie("accessTokenCookie", AccessToken, { path: '/', httpOnly: true});

        } catch (error) {
            ///////// if the refresh token has expired... // we need to do something /////////////
        }
    };


    
    const checkAuth = async () => {
        try {
            console.log("here");
            const responseData = await axios.get("/auth/callback");

            const { tokens, userInfo } = responseData.data;
            
            // Need To Set UserInfo ` avatar, name, wins, losses ... `

            // setAccessToken(tokens.access-token);
            // setRefreshToken(tokens.refresh-token);
            setIsAuthenticated(true);
            

            // setCookie("accessTokenCookie", tokens.access-token, { path: '/', httpOnly: true});

            // setCookie("refreshTokenCookie", tokens.refresh-token, { path: '/', httpOnly: true});

            
            ////////// don't know if i need to regenerate the same process all over again or not  /////

        } catch (error) {
        }
    };

    const logout = async () => {

        console.log("Logged Out");
        
        const jResponse = {
            accessToken: accessToken,
            refreshToken: refreshToken
        };
        
        try {
            const res = await axios.post("/logout", jResponse);

            removeCookie('accessTokenCookie', { path: '/' });
            removeCookie('refreshTokenCookie', { path: '/' });
    
            setIsAuthenticated(false);
        } catch (error) {
            
        }
    }

    useEffect( () => {
        const checkAuthentication = async () => {
            try {
                const accessToken = cookie.accessTokenCookie;

                if (!accessToken)
                {
                    // Need to redirect to sign in page
                    setIsAuthenticated(false);
                    <Navigate to="/" replace />

                    return ;
                }

                const headers = {
                    Authorization: `Bearer ${accessToken}`,
                };
                const response = await axios.get("auth/intra", { headers });
                
                if (response.data.status === 200)
                {
                    setIsAuthenticated(true);
                    <Navigate to="/Home" replace />
                }
                else if (response.data.status === 401) {
                    refreshAccessToken();
                }
            } catch (error: any) {
                // don't know what to do in here
            }
        }

        checkAuthentication();
    }, []);
    
    return (
        <AuthContext.Provider value={{ checkAuth, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export const authContext = () => useContext(AuthContext);

// check if the user has cookie--> 1 - true: extract the tokens and send them to the route /auth/intra.
                                    //2 false:send a request to the route /auth/callback, and wait for the response that contains the access_token and refresh_token.

// auth/callback --> the user has no cookie
//auth/intra ---> the user has a cookie
//auth/refresh-token --> the user access_token has expired, and need a new access_token via refresh_token.