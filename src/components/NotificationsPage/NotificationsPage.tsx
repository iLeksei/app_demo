import React, {ReactElement, useEffect, useState} from "react";
import {NotificationController} from "../../controllers/NotificationController";

interface IProps {
}

export const NotificationsPage = (props: IProps): ReactElement => {
    const [notifications, setNotifications] = useState<any[]>([]);

    useEffect(() => {
        getNotifications()
    }, [])

    const getNotifications = async () => {
        const result = await NotificationController.getNotificationList({});
        setNotifications(result);
    }


    return (
        <>
            Notifications here...
        </>
    )
}