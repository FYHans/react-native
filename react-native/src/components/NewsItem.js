import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

let style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    image: {
        width: 75,
        height: 60,
        marginRight: 10
    },
    main: {
        flex: 1,
        position: 'relative'
    },
    title: {
        fontSize: 16,
        lineHeight: 20,
        marginBottom: 4
    },
    content: {
        fontSize: 14,
        lineHeight: 18,
        color: '#aaa'
    },
    comment: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        color: '#aaa',
        fontSize: 13
    }
})

export default class NewsItem extends Component {
    render() {
        let { data } = this.props;
        return (
            <Link to={"/detail/" + data.id}>
                <View style={style.container}>
                    <Image source={{uri: 'https://www.icketang.com/icketanglessonpublicdata' + data.img}} style={style.image}></Image>
                    <View style={style.main}>
                        <Text style={style.title}>{ data.title }</Text>
                        <Text style={style.content}>{ data.content }</Text>
                        <Text style={style.comment}>{ '评论：' + data.comment}</Text>
                    </View>
                </View>
            </Link>
        )
    }
}

// 默认属性数据
NewsItem.defaultProps = {
    data: {}
}