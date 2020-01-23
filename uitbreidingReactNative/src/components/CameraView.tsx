import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {Colors, IconButton} from "react-native-paper";


export default function CameraView({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {

        // @ts-ignore
        (async () => {
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    // @ts-ignore
    async function takePicture() {
        console.log(this.camera);
        if (this.camera) {
            try {
                const options = {quality: 0.5, base64: true};
                const data = await this.camera.takePictureAsync(options);
                console.log(data.uri);
                navigation.push('CameraImage', {
                    uri: data.uri,
                });
                // const filename = new Date().getTime() + '.jpg';
                // const image = FileSystem.documentDirectory + filename;
                // console.log(image);
                // await FileSystem.copyAsync({
                //     from: data.uri,
                //     to: image
                // });

            } catch (e) {
                // This logs the error
                console.log(e)
            }

        }
    };

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    // @ts-ignore
    return (
        <View style={{flex: 1}}>
            <Camera style={{flex: 1}} type={type} ref={ref => {
                this.camera = ref;
            }}>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent'

                    }}>

                    <IconButton
                        icon="camera-front-variant"
                        color={Colors.lightGreen500}
                        size={50}
                        onPress={() => {
                            if (type === Camera.Constants.Type.back) {
                                console.log('frontCamera')
                                setType(Camera.Constants.Type.front);
                            } else {
                                console.log('backCamera')
                                setType(Camera.Constants.Type.back);
                            }


                        }}
                        style={{
                            position: 'absolute',
                            right: 0
                        }}
                    />


                    <IconButton
                        icon="camera"
                        color={Colors.red500}
                        size={50}
                        onPress={() => {
                            takePicture().then();
                        }}
                        style={{
                            position: 'absolute',
                            bottom: 0
                        }}
                    />



                </View>


            </Camera>
        </View>


    );
}
