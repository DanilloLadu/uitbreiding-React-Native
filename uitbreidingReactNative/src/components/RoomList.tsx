import React, {Component, useEffect, useState} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity, Button} from 'react-native';
import {RoomCard} from "./RoomCard";
import {RoomController} from "../controllers/roomController"
import {SafeAreaView} from "react-navigation";
import {Room} from "../models/room";
import {textInput} from "../style/TemporaryStyle";

type Props = {
    articles: String;
    isLoading: boolean;
};

export default function RoomList({navigation}) {

    const roomController: RoomController = new RoomController("http://danillo.be/");
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [description, setDescription] = useState("99999999");

    useEffect(() => {

        roomController.getRoomsWithLowerHappinessScore(99999999)
            .then(data => {
                setRooms(data.filter((item: Room) => {
                    return item.score < Number(description)
                }));
            })
            .then(() => setLoading(false))

        // roomController.getRoomsWithLowerHappinessScore(Number(description))
        //     .then(data => {
        //         setRooms(data);
        //     })
        //     .then(() => setLoading(false))

    }, [description]);

    if (loading) {
        return (
            <Text>Loading...</Text>
        )
    }

    return (
        // safe area boundaries of a device
        <SafeAreaView>
            <Text>HappinessScore</Text>
            <TextInput
                style={textInput.basic}
                onChangeText={text => setDescription(text)}
                value={description}
            />

            <FlatList
                data={rooms}
                renderItem={({item}) => <RoomCard navigation={navigation} {...item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
            />
            <Button title={'CameraView'} onPress={() => navigation.navigate('CameraView')}/>
            <Button title={'GyroscopeView'} onPress={() => navigation.navigate('GyroscopeView')}/>
        </SafeAreaView>
    );

};

