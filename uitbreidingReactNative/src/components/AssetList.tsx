import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import {useSelector} from "react-redux";
import {AssetController} from "../controllers/assetController";
import {RoomController} from "../controllers/roomController";
import {FAB, Portal, Provider, Title} from 'react-native-paper';
import {AssetCard} from "./AssetCard";


export default function AssetList({navigation}) {

    const assetController: AssetController = new AssetController("http://danillo.be/");
    const roomController: RoomController = new RoomController("http://danillo.be/");


    // @ts-ignore
    const [room, setRoom] = useState(useSelector(state => state.room.selectedRoom));
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

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

        <Provider>
            <Title>{room.name.toString()} - Score: {room.score.toString()}</Title>
            <FlatList data={assets}
                      renderItem={({item}) => <AssetCard {...item} navigation={navigation}/>}
                      keyExtractor={item => item.id.toString()}
                      numColumns={2}
            />


            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'heart-broken' : 'heart'}
                    actions={[
                        {
                            icon: 'plus', label: 'Happy', onPress: () => {
                                roomController.updateRoomHappinessScore(room.id, "Happy").then(() => {
                                    roomController.getRoomById(room.id).then(data => {
                                        setRoom(data);
                                    });
                                });
                            }
                        },
                        {
                            icon: 'minus', label: 'UnHappy', onPress: () => {
                                roomController.updateRoomHappinessScore(room.id, "Unhapy").then(() => {
                                    roomController.getRoomById(room.id).then(data => {
                                        setRoom(data);
                                    });
                                });
                            }
                        },
                    ]}
                    onStateChange={(openopenFab) => {
                        setOpen(openopenFab.open);
                    }}
                    onPress={() => {
                        if (open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>


    );

};


