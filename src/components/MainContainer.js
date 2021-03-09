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

    function getSearchResults() {
        const searchedUser = user.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
        setUsers(searchedUser)
    }

    function clearSearch() {
        setSearch("")
        getRandomUsers()
    }

    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
    }

    return(
        <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
            {/* search function */}
            <div className="input-group mb-3 float-center">
                <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee by Name" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-danger" onClick={clearSearch}><i class="fas fa-window-close"></i></button>
                <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
            </div>
            <Table list={users} sortEmail={sortEmail} sortNumber={sortNumber}/>
        </div>
    )
}

export default MainContainer;