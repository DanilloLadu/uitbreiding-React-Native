import React, {Component, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Button, View, Text, TextInput} from "react-native";
import {useSelector} from "react-redux";
import {H1} from "../style/TemporaryStyle";
import {TicketController} from "../controllers/ticketController";


export const CreateTicket = ({navigation}) => {

    // @ts-ignore
    const selectedAssetId = useSelector(state => state.asset.selectedAsset.id);
    const dispatch = useDispatch();
    const [description, setDescription] = useState('Useless Placeholder');
    const ticketController: TicketController = new TicketController("http://danillo.be/");

    function dispatchNewTicket(){
        const newTicket = {
            assetID: selectedAssetId,
            description: description,
        };

        dispatch({
            type: 'CREATE_TICKET',
            payload: newTicket
        });
    }

    return (
        <View>
            <Text>Create Ticket</Text>
            <Text>{selectedAssetId}</Text>
            <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={text => setDescription(text)}
                value={description}
            />
            <Button title={"Add Ticket"} onPress={() => {
                ticketController.postTicket(selectedAssetId, description).then(data => {
                    dispatchNewTicket();
                    navigation.navigate('AssetDetails');
                    console.log(data)
                });
            }}/>
        </View>
    );

};
