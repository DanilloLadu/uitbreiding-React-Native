import React from 'react';
import {useDispatch} from "react-redux";
import {View} from "react-native";
import {TicketController} from "../controllers/ticketController";
import {Button, Badge, Caption} from "react-native-paper";
import {buttons, styles} from "../style/TemporaryStyle";

export const TicketCard = (ticket) => {

    const ticketController: TicketController = new TicketController("http://danillo.be/");
    const dispatch = useDispatch();


    function dispatchUpVotedTicket() {
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

    return (
        <View>
            <Button icon="plus" mode="contained" style={[buttons.second, styles.flexRow]} onPress={() => {
                dispatchUpVotedTicket()
            }}>
                <Caption>{ticket.description}</Caption>
                <Badge> {ticket.votes}</Badge>
            </Button>
        </View>

    );

};
