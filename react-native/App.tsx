// import React from 'react';
// import {Button, StyleSheet, Text, View} from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from "react-navigation";
// import RoomList from "./src/components/RoomList";
// import AssetList from "./src/components/AssetList";
// import {Provider} from 'react-redux';
// import {applyMiddleware, createStore} from "redux";
// import combinedReducers from "./src/reducers";
// import thunk from "redux-thunk";
// import TicketList from "./src/components/TicketList";
// import {CreateTicket} from "./src/components/CreateTicket";
// import CameraView from "./src/components/CameraView";

// export default function App() {
//
//     const Stack = createStackNavigator({
//         Home: {
//             screen: CameraView
//         },
//         Details: {
//             screen: AssetList
//         },
//         AssetDetails: {
//             screen: TicketList
//         },
//         CreateTicket: {
//             screen: CreateTicket
//         }
//     });
//
//     const store = createStore(combinedReducers, applyMiddleware(thunk));
//
//     const AppContainer = createAppContainer(Stack);
//
//     return (
//         // redux
//         // navigator
//         <Provider store={store}>
//
//             <AppContainer/>
//         </Provider>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={type}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
