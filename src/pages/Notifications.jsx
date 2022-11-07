import React from "react";
import Header from "../components/Header";
import NotificationsTile from "../components/notifications.jsx/NotificationsTile";

const Notifications = ()=>{
    const content ={
        title: "forum",
        subtitle:"this is a forum",
        date: "01/3/2023"

    }
    const content1 ={
        title: "Poll",
        subtitle:"this is a poll",
        date: "01/4/2023"


    }
    return(
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white">
            <Header title="Notification" category=""/>
            <NotificationsTile content ={content}/>
            <NotificationsTile content ={content1}/>



            



        </div>
    )
}
export default Notifications