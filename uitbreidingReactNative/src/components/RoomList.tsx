import React, {Component, useEffect, useState} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {RoomCard} from "./RoomCard";
import {RoomController} from "../controllers/roomController"
import {SafeAreaView} from "react-navigation";
import {Room} from "../models/room";
import {styles, textInput} from "../style/TemporaryStyle";
import {Button, Appbar, Searchbar} from 'react-native-paper';

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
                setRooms(data.filter((a: Room) => {
                    return a.score < Number(description)
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

        <SafeAreaView style={styles.MainContainer}>

            <FlatList
                data={rooms}
                renderItem={({item}) => <RoomCard navigation={navigation} {...item} />}
                keyExtractor={item => item.id.toString()}
            />
            <Appbar style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
                <Appbar.Action icon="camera" onPress={() => navigation.navigate('CameraView')}/>
                <Appbar.Action icon="all-inclusive" onPress={() => navigation.navigate('GyroscopeView')}/>
                <Appbar.Action icon="play" onPress={() => navigation.navigate('LottieAnimation')}/>
                <Searchbar
                    placeholder="Search"
                    onChangeText={text => setDescription(text)}
                    value={description}
                />
            </Appbar>
        </SafeAreaView>

    );

};

