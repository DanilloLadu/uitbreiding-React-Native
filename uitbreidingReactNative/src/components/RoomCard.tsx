import React from 'react';
import {Button, View} from "react-native";
import {H1, H2} from "../style/TemporaryStyle";
import {useDispatch} from "react-redux";

type Props = {
    navigation: any
    name: String,
    score: number,
    id: number
}

export const RoomCard: React.FunctionComponent<Props> = (room) => {

    const dispatch = useDispatch();

    function getRoomIntoState(room){
        const currentRoom = {
            name: room.name,
            score: room.score,
            id: room.id
        };

        dispatch({
            type: 'GET_ROOM',
            payload: currentRoom
        });
    }

    return (
        <View>
            <H1>{room.name}</H1>
            <H2>{room.score}</H2>
            <H2>{room.id}</H2>
            <Button title={'click me'}
                    onPress={() => {
                        getRoomIntoState(room);
                        room.navigation.navigate('Details');
                    }}
            />
        </View>
    );
};
