import React from 'react';

export default function PlayingToday(props) {
    return (
        <>
              <ul>
                  
                {
              props.data.forEach(element => {
                return <li>{element.value}</li>
                })
                }
            </ul>
        </>
    )
}