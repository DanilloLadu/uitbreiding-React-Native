import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Camera} from 'expo-camera';




export default function CameraView({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);


    useEffect(() => {
        (async () => {
            // @ts-ignore
            const {status} = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    async function takePicture() {
        console.log(this.camera);
        if (this.camera) {
            try {
                const options = {quality: 0.5, base64: true};
                const data = await this.camera.takePictureAsync(options);
                console.log("data url");
                console.log(data.uri);

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
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            //   flex: 0.1,
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
                        <Text style={{fontSize: 18, marginBottom: 10, color: 'white'}}> Flip </Text>
                        <TouchableOpacity
                            style={{
                                //flex: 0.1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                takePicture().then();

                            }}>
                            <Text style={{fontSize: 18, marginBottom: 10, color: 'white'}}> Take </Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

                </View>



            </Camera>
        </View>


    );
}
