import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { axios } from '../tools';

let style = StyleSheet.create({
    container: {
        marginBottom: 80
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 50,
        padding: 10,
        fontWeight: 'bold'
    },
    status: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    time: {
        color: '#aaa'
    },
    comment: {
        color: '#aaa'
    },
    image: {
        width: "100%",
        height: 400,
    },
    content: {
        color: '#333',
        fontSize: 16,
        lineHeight: 30,
        padding: 10,
    },
    btn: {
        backgroundColor: '#3e86ce',
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderRadius: 5,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'        
    }
})

// 组件
export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        // console.log(this.props);
        axios('https://www.icketang.com/icketanglessonpublicdata/data/detail.json?id=' + this.props.match.params)
        .then(data => this.setState({data}))
    }
    render() {
        let { data } = this.state;
        return (
            <ScrollView style={style.container}>
                <Text style={style.title}>{ data.title}</Text>
                <View style={style.status}>
                    <Text style={style.time}>{ data.time}</Text>
                    <Text style={style.comment}>{ data.comment ? '评论：'+data.comment : ''}</Text>
                </View>
                <Image resizeMode="cover" style={style.image} source={{uri: 'https://www.icketang.com/icketanglessonpublicdata' + data.img}}></Image>
                <Text style={style.content}>{data.content}</Text>
                <Link to={"/comment/" + data.id}>
                    <Text style={style.btn}>查看更多评论</Text>
                </Link>
            </ScrollView>
        )
    }
}