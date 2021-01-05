import { useEffect, useState } from "react";

export const useMousePosition = () => {
    //get the position of the mouse
    //setPosition updates position
    //x, y and z is the default values of the mouse position
    const[position, setPosition] = useState({x: 0, y: 0});

    //This will create a hook = componentDidMount &&|| comoponentDidUpdate
    useEffect(() => {
        const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY});
        window.addEventListener("mousemove", setFromEvent);
        return () => {
            //cleanup
            window.removeEventListener("mousemove", setFromEvent);
        }
        //Adding a listerner to a function that we are creating, this array should stay empty
        //Saying to react that if somthing changes then reinitioliz this hook and clean it up
        //with an empty array nothing is changing so this hook will only run once untill the component is unmounted.
    }, [])
    return position;
}