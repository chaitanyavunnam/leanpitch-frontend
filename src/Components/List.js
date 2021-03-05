import React, { useEffect, useState } from 'react';
export default function List(props) {
    return (
        <>
        <tr>
        <td>{props.indx+1}</td>
        <td>{props.name}</td>
        <td>{props.points}</td>
        </tr>
        </>
    )
}