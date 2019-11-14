import React, { useState } from 'react';

function Form(props) {
    const [list, setList] = useState({ name: "", email: "", role: "" })

    const handleChanges = e => {
        setList({ ...list, [e.target.name]: e.target.value})
        // console.log(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(list);
        setList({ name: "", email: "", role: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name: </label>
            <input 
                id="name"
                type="text"
                name="name"
                value={list.name}
                onChange={handleChanges}
            />
            <label htmlFor="email"> Email: </label>
            <input
                 id="email"
                 type="text"
                 name="email"
                 value={list.email}
                 onChange={handleChanges}
            />
            <label htmlFor="role"> Role: </label>
            <input
                id="role"
                type="text"
                name="role"
                value={list.role}
                onChange={handleChanges}
            />
            <button type="submit">Add Member</button>
        </form>
    )
}

export default Form