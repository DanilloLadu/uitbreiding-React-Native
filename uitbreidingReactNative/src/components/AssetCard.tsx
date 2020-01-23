import React from 'react';
import {useDispatch} from "react-redux";
import {Button, View, Text} from "react-native";



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
            <Text>{asset.name}</Text>
            <Button title={'click'} onPress={ () => {
                dispatchAsset(asset);
                asset.navigation.navigate('AssetDetails', {});
            } }/>
        </View>
    );

};
