import { useEffect } from 'react';


export const ShowCount = (props) => {
    useEffect(() => {
        console.log(props.count, props.count2);
    }, [props.count, props.count2]);


    return <div>{props.count} {props.count2}</div>;
}