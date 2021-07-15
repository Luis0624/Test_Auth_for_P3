// import React from "react";
// export default React.createContext(null);
import axios from "axios";

export default {
    getLogin(id){
        return axios.get(`/api/users/${id}`)
    }, 

    //will get all users based on setup
    createUser(user){
        return axios.post("/api/users", user)
    }
}