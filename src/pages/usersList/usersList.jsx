import React from "react";
import UserCard from "../userCard/userCard";
import Virtualize from "../vitualize/virtualize";
import "./usersList.styles.css";
import {useGetPostsQuery} from "../../services/base-api";

const UsersList = function () {

    let {data} = useGetPostsQuery(0)


    if (data?.length < 2) {
        return null
    }


    return (
        <div className="container">
            <div className="innerContainer">
                <Virtualize data={data} Component={UserCard} gap={4}
                            keyEtractorFunction={item => item.id}/>
            </div>
        </div>
    );
};

export default UsersList;
