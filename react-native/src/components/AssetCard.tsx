import React from 'react';
import {useDispatch} from "react-redux";
import {Button, View} from "react-native";
import {H1} from "../style/TemporaryStyle";


export const AssetCard = (asset) => {

    const dispatch = useDispatch();

    function dispatchAsset(asset){

        const currentAsset = {
            id: asset.id,
            name: asset.name
        };

        dispatch({
            type: 'GET_ASSET',
            payload: currentAsset
        });
    }

    return(
        <View>
            <H1>{asset.name}</H1>
            <Button title={'click'} onPress={ () => {
                dispatchAsset(asset);
                asset.navigation.navigate('AssetDetails', {});
            } }/>
        </View>
    );

};