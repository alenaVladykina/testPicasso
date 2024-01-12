import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useFetchPostByIdQuery} from "../../services/base-api";
import {Button} from "../../components/button/Button";
import './postPage.styles.css'


export const PostPage = () => {
    const params = useParams()
    const {data} = useFetchPostByIdQuery(params.postId)
    const navigate = useNavigate()

    const onClickNavigate = () => {
        navigate("/")
    }

    return (
        <div className={'postPage'}>
            <h2 className='title'>{data?.title}</h2>
            <p>{data?.body}</p>
            <div className="buttonWrapper">
                <Button onClick={onClickNavigate} title={'<= Back'}/>
            </div>

        </div>
    );
};
