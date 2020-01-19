import React from 'react';
import {useDispatch} from "react-redux";
import {Button, Text, View} from "react-native";
import {H2} from "../style/TemporaryStyle";
import {TicketController} from "../controllers/ticketController";


export const TicketCard = (ticket) => {

    const ticketController: TicketController = new TicketController("http://danillo.be/");
    const dispatch = useDispatch();


    function dispatchUpVotedTicket(){
        ticketController.postIncreaseVote(ticket.id).then();
        const upVotedTicket = {
            assetID: ticket.asset_id,
            description: ticket.description,
        };

        dispatch({
            type: 'UPVOTED_TICKET',
            payload: upVotedTicket
        });
    }

    return(
        <View>
            <H2>{ticket.description}</H2>
            <Text>upvotes : {ticket.votes}</Text>
            <Button title={'❤'} onPress={() => dispatchUpVotedTicket()} />
        </View>
    );

};
