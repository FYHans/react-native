import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Route, Switch, Link } from 'react-router-native';
import Home from './pages/Home';
import Comments from './pages/Comments';
import Detail from './pages/Detail';
import Header from './components/Header';

export default class App extends Component {
    render() {
        let { history } = this.props;
        return (
            <View>
                <Header onLeftClick={e => history.goBack()} onRightClick={e => console.log('登录')} rightContent="登录" title="ickt新闻网"></Header>
                {/* <Link to="/"><Text>home</Text></Link>
                <Link to="/comments/1"><Text>comments</Text></Link>
                <Link to="/detail/1"><Text>detail</Text></Link> */}
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/detail/:id" component={Detail}></Route>
                    <Route path="/comment/:id" component={Comments}></Route>
                </Switch>
            </View>
        )
    }
}
