import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import RoomList from "./src/components/RoomList";
import AssetList from "./src/components/AssetList";
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import combinedReducers from "./src/reducers";
import thunk from "redux-thunk";
import TicketList from "./src/components/TicketList";
import {CreateTicket} from "./src/components/CreateTicket";
import CameraView from "./src/components/CameraView";
import GyroscopeView from "./src/components/GyroscopeView";


export default function App() {

    

    const Stack = createStackNavigator({
        Home: {
            screen: RoomList
        },
        Details: {
            screen: AssetList
        },
        AssetDetails: {
            screen: TicketList
        },
        CreateTicket: {
            screen: CreateTicket
        },
        CameraView: {
            screen: CameraView
        },
        GyroscopeView: {
            screen: GyroscopeView
        }


    });

    const store = createStore(combinedReducers, applyMiddleware(thunk));

    const AppContainer = createAppContainer(Stack);

    return (
        // redux
        // navigator
        <Provider store={store}>

            <AppContainer/>
        </Provider>
    );
}
