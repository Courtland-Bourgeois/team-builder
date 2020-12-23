import React from "react";

function DefaultForm(props) {
    return (
        <div>
            {props.teamList.map(list => (
                <div key={list.id}>
                    <h2>{list.name}</h2>
                    <p>{list.email}</p>
                    <p>{list.role}</p>
                </div>
            ))}
        </div>
    )
}

export default DefaultForm