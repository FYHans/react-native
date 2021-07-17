import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';
import Discuss from '../components/Discuss';
import { axios } from '../tools';

let style = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        height: 100,
        padding: 10,
        fontSize: 16
    },
    btn: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    btnText: {
        backgroundColor: '#3e86ce',
        width: 80,
        height: 30,
        fontSize: 16,
        color: '#fff',
        lineHeight: 30,
        textAlign: 'center',
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 50
    },
    separatorStyle: {
        borderColor: '#ccc',
        borderBottomWidth: 2,
        marginTop: 5
    }

})

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            id: 0,
            list: [],
            refreshing: false
        }
    }
    componentDidMount() {
        // console.log(this.props.match.params);
        axios('https://www.icketang.com/icketanglessonpublicdata/data/comment.json?id' + this.props.match.params.id)
            .then(data => this.setState(data))
    }
    submitData() {
        let { msg, list } = this.state;
        // 校验内容
        if (/^\s*$/.test(msg)) {
            alert('请输入内容');
            return;
        }
        // 获取时间
        let date = new Date();
        // 拼凑提交的时间
        let sendData = {
            user: 'ABC',
            content: msg,
            time: `刚刚 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        }
        // 提交接口
        axios('https://www.icketang.com/icketanglessonpublicdata/data/addComment.json', { params: sendData })
            .then(data => {
                // 提交成功
                if (data.errno === 0) {
                    list.unshift(sendData);
                    // 修改数据就是更新视图
                    this.setState({ list, msg: '' })
                } else {
                    alert('提交失败')
                }
            }) 
    }
    _renderSeparator = () => {
        return (
            class Separator extends Component {
                render(){
                    return (
                        <View style={style.separatorStyle} />
                    );
                }
            }
        );
    }
    render() {
        let { msg, list } = this.state;
        return (
            <View>
                <TextInput
                    style={style.input}
                    multiline
                    placeholder="文明上网，理性发言"
                    value={msg}
                    onChangeText={msg => this.setState({msg})}
                ></TextInput>
                <View style={style.btn}>
                    <Text style={style.btnText} onTouchEnd={e => this.submitData(e)}>提交</Text>
                </View>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Discuss data={item}></Discuss>}
                    keyExtractor={item => item.time + item.user}
                    ItemSeparatorComponent={this._renderSeparator()}
                    onEndReachedThreshold={0.3}
                    onEndReached={this.onEndReached}
                    ></FlatList>
            </View>
        )
    }
}
