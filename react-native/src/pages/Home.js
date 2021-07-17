import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import NewsItem from '../components/NewsItem';
import {axios} from '../tools';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        // 获取数据
        // fetch('https://www.icketang.com/icketanglessonpublicdata/data/list.json')
        //     .then(res => res.text())
        //     .then(str => new Function('return (' + str + ')')())
        //     .then(data => console.log(data))
            // .then(str => eval(str))
        
        // axios('https://www.icketang.com/icketanglessonpublicdata/data/list.json')
        //     .then(data => console.log(data))

        axios('https://www.icketang.com/icketanglessonpublicdata/data/list.json')
            .then(data => this.setState({data}))
    }
    render() {
        return <FlatList
                data={this.state.data}
                renderItem={({ item }) => <NewsItem data={item}></NewsItem>}
                keyExtractor={item => item.id}
            ></FlatList>
    }
}
