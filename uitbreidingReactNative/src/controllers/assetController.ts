import {Asset} from "../models/asset";

export class AssetController {

    private url: String;

    constructor(url: String) {
        this.url = url;
    }

    public async getAssetById(id: number): Promise<Asset> {
        try {
            let response = await fetch(`${this.url}assets/${id}`, {
                'method': 'GET',
                'headers': {
                    'Content-Type': 'application/json'
                }
            });
            if(await response.status == 200){
                return await response.json();
            }
            return null;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    public async getAssetsByRoomId(id: number): Promise<Array<Asset>> {
        try {
            let response = await fetch(`${this.url}assets/room/${id}`);
            if(await response.status == 200){
                return await response.json();
            }
            return null;
        } catch (error) {
            console.error('Error:', error);
        }
    }


    public async putAsset(id: number, name: string) {
        try {
            const response = await fetch(`${this.url}assets`, {
                method: 'PUT',
                'body': JSON.stringify({
                    'room_id': id,
                    'name': name
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

    public async putAssetWithObject(data: Asset) {
        try {
            const response = await fetch(`${this.url}assets`, {
                method: 'PUT',
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

    public async postAssetWithObject(data: Asset) {
        try {
            const response = await fetch(`${this.url}assets`, {
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

    public async deleteAsset(id: number) {
        try {
            const response = await fetch(`${this.url}assets/${id}`, {
                method: 'DELETE'
            });
            console.log(await response.status);
        } catch (error) {
            console.error('Error:', error);
        }
    }

}
