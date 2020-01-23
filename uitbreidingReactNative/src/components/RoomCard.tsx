import React from 'react';
import {View, Text} from "react-native";
import {useDispatch} from "react-redux";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

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
            <Card>
                <Card.Content>
                    <Title>Name: {room.name}</Title>
                    <Paragraph>Id: {room.id} Score: {room.score}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button icon="google-classroom" mode="outlined"
                            onPress={() => {
                                getRoomIntoState(room);
                                room.navigation.navigate('Details');
                            }}
                    >Enter</Button>
                </Card.Actions>
            </Card>
        </View>
    );
};
