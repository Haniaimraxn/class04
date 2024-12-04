import React from 'react';
interface Props {
    name: string,
    roll: number,
    day: string,
    email:string,
    address:string,
    time:string
    
}
const Card = (props: Props) => {
    return (
        <div className='m-8 md:m-6 lg:m-20 mx-4 md:mx-32 lg:mx-96 bg-teal-950 text-white py-4 px-6 flex flex-col justify-center items-center border-2 rounded-lg  font-serif text-xl animate-pulse'>
            <h2>Name : {props.name} </h2>
            <h2>Roll no : {props.roll}</h2>
            <h2>Address : {props.address}</h2>
            <h2>Email : {props.email}</h2>
            <h2>Day : {props.day}</h2>
            <h2>Time : {props.time}</h2>
        </div>
    )
}

export default Card