import {Room} from "../models/room";

export class RoomController {

    private url: String;


    constructor(url: String) {
        this.url = url;
    }

    public async getRoomsHappinessScore(score: number): Promise<Room> {
        try {
            let response = await fetch(`${this.url}rooms/${score}/score`);
            if(await response.status == 200){
                return await response.json();
            }
            return null;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    public async getRoomsWithLowerHappinessScore(score: number): Promise<Array<Room>> {
        try {
            let response = await fetch(`${this.url}rooms?score=${score}`);
            if(await response.status == 200){
                return await response.json();
            }
            return null;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async getRoomById(id: number): Promise<Room> {

        try {
            let response = await fetch(`${this.url}rooms/${id}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            console.log(await response.status);
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async updateRoomHappinessScore(id: number, score: string) {
        try {
            const response = await fetch(`${this.url}rooms`, {
                method: 'POST',
                'body': JSON.stringify({
                    'id': id,
                    'score': score
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(await response.status);
        } catch (error) {
            console.error('Error:', error);
        }

    }


}
