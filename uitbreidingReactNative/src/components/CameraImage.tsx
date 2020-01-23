import React, {Component, useEffect, useState} from 'react';
import {Text, View, Button, Image} from 'react-native';


export default function CameraImage({navigation}) {
    const [file, setFile] = useState(navigation.getParam('uri'));

    // useEffect(() => {
    //     setFile(navigation.getParam('uri'));
    // }, []);


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Taken Picture</Text>
            <Text>
                {file.toString()}
            </Text>
            <Image style={{width: 300, height: 300}}
                   source={{uri: file}}
            />

            <Button
                title="Home"
                onPress={() =>
                    navigation.push('Home')
                }
            />
        </View>
    );

};
