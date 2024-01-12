import React, {useEffect, useRef, useState} from "react";
import "./userCard.styles.css";
import {useNavigate} from "react-router-dom"
import {Button} from "../../components/button/Button";

const UserCard = function (props) {
    const [add, setAdd] = useState(false)
    const ref = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (ref.current !== null) {
            const h1 = ref.current.scrollHeight
            const h2 = ref.current?.offsetHeight
            h1 === h2 ? setAdd(false) : setAdd(true)
        }
    }, [])

    const onClickHandler = () => {
        navigate(`/${props.id}`)
    }
    return (
        <div className="userCardContainer">
            <h2 className='title'><span>{props.id}.</span> {props.title}</h2>
            <p ref={ref} className='text'>{props.body}</p>
            <div className='buttonWrap'>
                {add && <Button onClick={onClickHandler} title={'details >>'}/>}
            </div>

        </div>
    );
};

export default UserCard;


