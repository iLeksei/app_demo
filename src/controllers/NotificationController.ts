
export class NotificationController {

    static getNotificationList = async (filterData: any): Promise<any[]> => {
        try {
            const response: Response = await fetch(`notifications`);
            return  await response.json();
        } catch (e) {
        }
        return Promise.resolve([])
    }

}