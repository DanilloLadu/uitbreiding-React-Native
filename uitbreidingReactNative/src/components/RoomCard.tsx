import React from 'react';
import {Button, View, Text} from "react-native";
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
            <Text>{room.name}</Text>
            <Text>{room.score}</Text>
            <Text>{room.id}</Text>
            <Button title={'click me'}
                    onPress={() => {
                        getRoomIntoState(room);
                        room.navigation.navigate('Details');
                    }}
            />
        </View>
    );
};
