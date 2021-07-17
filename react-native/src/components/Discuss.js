import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

let style = StyleSheet.create({
    container: {
        margin: 10,
    },
    user: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    content: {
        color: '#666',
        fontSize: 16,
        marginBottom: 6
    },
    time: {
        color: '#bbb',
        fontSize: 14
    }
})

export default class Discuss extends Component {
    render() {
        let { data } = this.props;
        return (
            <View style={style.container}>
                <Text style={style.user}>{ data.user }</Text>
                <Text style={style.content}>{ data.content }</Text>
                <Text style={style.time}>{ data.time }</Text>
            </View>
        )
    }
}
