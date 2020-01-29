import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap'
    },
    MainContainer:
        {
            flex: 1
        },
    fab: {
        position: 'absolute',
        right: 0,
        bottom: 0,
    },flexRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

const buttons = StyleSheet.create({
    primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    second:{
        margin: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const textInput = StyleSheet.create({
    basic: {
        backgroundColor: 'red',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export {styles, buttons, textInput}

