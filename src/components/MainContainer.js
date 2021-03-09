import axios from "axios";
import React, {useEffect, useState} from "react";
import Table from "./Table";

function MainContainer() {
    const [users, setUsers] = useState([])
    cosnt [SearchForm, setSearch] = useState("")

    useEffect(() => {
        getRandomUsers()
    }, [])

    async function getRandomUsers() {
        const result = await axios.get("https://randomuser.me/api/?results=200&nat=us")
        setUsers(result.data.results)
    }
}

export default MainContainer;