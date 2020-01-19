import {Ticket} from "../models/ticket";

export class TicketController {

    private url: String;

    constructor(url: String) {
        this.url = url;
    }

    public async getTicketsByAssetId(id: number): Promise<Array<Ticket>> {
        try {
            let response = await fetch(`${this.url}assets/${id}/tickets`);
            if(await response.status == 200){
                return await response.json();
            }
            return null

        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async getAllTickets(): Promise<Array<Ticket>> {
        try {
            let response = await fetch(`${this.url}tickets`);
            if(await response.status == 200){
                return await response.json();
            }
            return null
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async postTicketWithObject(data: Ticket) {
        try {
            const response = await fetch(`${this.url}tickets`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(await response.status);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async postTicket(asset_id: Number, description: String) {
        try {
            const response = await fetch(`${this.url}tickets`, {
                method: 'POST',
                body: JSON.stringify({
                    "asset_id": asset_id,
                    "description": description
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

    public async postIncreaseVote(ticketId: Number) {
        try {
            const response = await fetch(`${this.url}tickets/${ticketId}/vote`, {
                method: 'POST'
            });
            console.log(await response.status);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async deleteTicket(id: number) {
        try {
            const response = await fetch(`${this.url}tickets/${id}`, {
                method: 'DELETE'
            });
            console.log(await response.status);
        } catch (error) {
            console.error('Error:', error);
        }
    }

}
