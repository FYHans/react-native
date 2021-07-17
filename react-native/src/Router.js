import React from 'react';
import { Route, NativeRouter, withRouter } from 'react-router-native';
import App from './App'

let RouteApp = withRouter(App);

export default () => (
    <NativeRouter>
        {/* <Route path="/" component={App}></Route> */}
        <RouteApp></RouteApp>
    </NativeRouter>
)
