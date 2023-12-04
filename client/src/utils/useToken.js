import { useEffect, useState } from "react";

export default function useToken() {
    const [token, SetToken] = useState("");

    useEffect(()=> {
        if(JSON.parse(localStorage.getItem("token")))  SetToken(JSON.parse(localStorage.getItem("token")) || "");
    }, []);

    return token;
}