import React from 'react';
import {useDispatch} from "react-redux";
import {View, Text} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {buttons} from "../style/TemporaryStyle";

export const AssetCard = (asset) => {

    const dispatch = useDispatch();

    function dispatchAsset(asset) {

        const currentAsset = {
            id: asset.id,
            name: asset.name
        };

        dispatch({
            type: 'GET_ASSET',
            payload: currentAsset
        });
    }

    return (
        <View>
            <Button mode="contained" style={buttons.second} onPress={() => {
                dispatchAsset(asset);
                asset.navigation.navigate('AssetDetails', {});
            }}>
                {asset.name}
            </Button>
        </View>
    );

};
