import React, {Component, useEffect, useState} from 'react';
import {Text, View, Button, FlatList, StyleSheet} from 'react-native';
import {useSelector} from "react-redux";
import {TicketController} from "../controllers/ticketController";
import {TicketCard} from "./TicketCard";
import {FAB, Title} from "react-native-paper";
import {styles} from "../style/TemporaryStyle";

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

                    <Title>{selectedAsset.name}</Title>
                    <FlatList data={tickets}
                              renderItem={({item}) => <TicketCard {...item}/>}
                              keyExtractor={item => item.id.toString()}
                              numColumns={1}
                    />




                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => {
                        navigation.navigate('CreateTicket')
                    }}
                />
            </View>


        );
    } else {
        return (
            <View>
                <Text>No Tickets found</Text>
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => {
                        navigation.navigate('CreateTicket')
                    }}
                />
            </View>
        )
    }
};

