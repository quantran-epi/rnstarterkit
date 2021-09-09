import React from 'react'
import WebView from 'react-native-webview'

export const WebviewExample = () => {
    return <WebView
        source={{ uri: "https://vnexpress.net" }}
    />
}