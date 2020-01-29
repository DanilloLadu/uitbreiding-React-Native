import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import LottieView from "lottie-react-native";

export default class LottieAnimation extends React.Component {
    render() {
        // @ts-ignore
        return <LottieView source={require('../../assets/lottie.json')} autoPlay loop/>;
    }

};
