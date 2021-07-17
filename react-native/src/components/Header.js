import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

let style = StyleSheet.create({
    container: {
        backgroundColor: '#3e86ce',
        height: 50,
        display: 'flex',
        flexDirection: 'row'
    },
    left: {
        width: 60,
        position: 'relative'
    },
    arrow1: {
        position: 'absolute',
        top: 20,
        left: 10,
        borderWidth: 10,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: '#fff'
    },
    arrow2: {
        position: 'absolute',
        top: 20,
        left: 12,
        borderWidth: 10,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: '#3e86ce'
    },
    center: {
        flex: 1
    },
    right: {
        width: 60
    },
    leftContent: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 50
    },
    title: {
        fontSize: 22,
        lineHeight: 50,
        textAlign: 'center',
        color: '#fff'
    }
})

export default class Header extends Component {
    render() {
        let { leftContent, rightContent, title, onLeftClick, onRightClick, children } = this.props;
        return (
            <View style={style.container}>
                <View onTouchEnd={e => onLeftClick(e)} style={style.left}>
                    {
                        leftContent ?
                            <Text style={style.leftContent}>{leftContent}</Text> :
                            <Fragment>
                                <View style={style.arrow1}></View>
                                <View style={style.arrow2}></View>
                            </Fragment>
                    }
                </View>
                <View style={style.center}>
                    <Text style={style.title}>{ title || children}</Text>
                </View>
                <View onTouchEnd={e => onRightClick(e)} style={style.right}>
                    <Text style={style.leftContent}>{rightContent}</Text>
                </View>
            </View>
        )
    }
}

// 默认属性数据
Header.defaultProps = {
    leftContent: '',
    rightContent: '',
    title: '',
    onLeftClick() {},
    onRightClick() {}
}