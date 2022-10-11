import React from 'react';
import Card from './Card';

const Cards = ({users}) => {
    return (
        <>
            {users.map((user)=>{
                return (
                    <Card user={user}/>
                )
            })}
        </>
    )
}

export default Cards;