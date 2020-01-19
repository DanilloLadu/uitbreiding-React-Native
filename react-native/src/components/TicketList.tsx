import React, {Component, useEffect, useState} from 'react';
import {Text, View, Button, FlatList, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import {TicketController} from "../controllers/ticketController";
import {TicketCard} from "./TicketCard";

export default function TicketList({navigation}) {

    const ticketController: TicketController = new TicketController("http://danillo.be/");
    const selectedAsset = useSelector(state => state.asset.selectedAsset);
    const newTicket = useSelector(state => state.ticket.newTicket);
    const upVotedTicket = useSelector(state => state.ticket.upVotedTicket);

    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ticketController.getTicketsByAssetId(selectedAsset.id)
            .then(data => {
                console.log(data);
                setTickets(data);
            })
            .then(() => setLoading(false))
            .catch();
    }, [newTicket, upVotedTicket]);


    if (tickets !== null) {
        return (
            <View>
                <Text>
                    TicketList from asset : {selectedAsset.name}
                </Text>

                <FlatList data={tickets}
                          renderItem={({item}) => <TicketCard {...item}/>}
                          keyExtractor={item => item.id.toString()}
                          numColumns={3}
                />


                <Button title={"Add Ticket"} onPress={() => {
                    navigation.navigate('CreateTicket')
                }}/>
            </View>


        );
    } else {
        return (
            <View>
                <Text>No Tickets found</Text>
                <Button title={"Add Ticket"} onPress={() => {
                    navigation.navigate('CreateTicket')
                }}/>
            </View>
        )
    }
};

