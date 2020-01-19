import React, {Component, useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import {useSelector} from "react-redux";
import {AssetController} from "../controllers/assetController";
import {AssetCard} from "./AssetCard";
import {RoomController} from "../controllers/roomController";

export default function AssetList({navigation}) {

    const assetController: AssetController = new AssetController("http://danillo.be/");
    const roomController: RoomController = new RoomController("http://danillo.be/");


    const [room, setRoom] = useState(useSelector(state => state.room.selectedRoom));
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        assetController.getAssetsByRoomId(room.id)
            .then(data => {
                setAssets(data);
            })
            .then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        <View>
            <Text>
                Room: {room.name.toString()}
            </Text>
            <Text>Score: {room.score.toString()}</Text>
            <FlatList data={assets}
                      renderItem={({item}) => <AssetCard {...item} navigation={navigation}/>}
                      keyExtractor={item => item.id.toString()}
                      numColumns={3}
            />
            <Button title={"Happy"} onPress={() => {
                roomController.updateRoomHappinessScore(room.id, "Happy").then(() => {
                    roomController.getRoomById(room.id).then(data => {
                        setRoom(data);
                    });
                });
            }}/>
            <Button title={"UnHappy"} onPress={() => {
                roomController.updateRoomHappinessScore(room.id, "Unhapy").then(() => {
                    roomController.getRoomById(room.id).then(data => {
                        setRoom(data);
                    });
                });
            }}/>
        </View>
    );
};

