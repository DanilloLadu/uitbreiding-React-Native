import React from 'react';
import LottieView from "lottie-react-native";

export default class LottieAnimation extends React.Component {
    private animation: any;


    componentDidMount() {
       this.animation.play();
        // Or set a specific startFrame and endFrame with:
       // this.animation.play(10, 11);
    }

    render() {

        return    <LottieView
            ref={animation => {
                this.animation = animation;
            }}
            // @ts-ignore
            source={require('../../assets/lottie.json')}/>;
    }

};
