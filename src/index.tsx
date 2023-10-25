import React from 'react';
import type { ViewStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { WebView, type WebViewMessageEvent } from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const MyWebComponent = () => {
  const [size, setSize] = React.useState({
    height: 150,
    width: 150,
  });

  const handleLayoutChange = (event: WebViewMessageEvent) => {
    if (event.nativeEvent.data === 'pip') {
      setSize({
        height: 150,
        width: 150,
      });
    } else if (event.nativeEvent.data === 'full') {
      setSize({
        height: windowHeight,
        width: windowWidth,
      });
    }
  };

  const html = `
    <!DOCTYPE html>
    <html>
      <script defer="true" src="https://sdk.oli.video/oli-sdk.js" id="0ceb61c8-77ec-4d58-8bc4-42778c6d09d1"></script>
      <script>

        //dumb strategy just for demo purposes

        const interval = setInterval(() => {
          if (!window.OliShort) {
            return;
          }

          const base = OliShort.mountPoint.querySelector('*');

          if (base.className === 'sc-ieZDjg fuftHO') {
            window.ReactNativeWebView.postMessage('pip');
            base.style.margin = '0';
            base.style.bottom = '0';
            base.style.left = '0';

          } else if(base.className === 'sc-kGTyPW hMIlvD') {
            window.ReactNativeWebView.postMessage('full');
          }
        }, 100);
      </script>
    </html>
  `;

  const containerStyle: StyleProp<ViewStyle> = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: size.width,
    height: size.height,
  };

  const webviewStyle: StyleProp<ViewStyle> = {
    height: size.height,
    width: size.width,
    backgroundColor: 'transparent',
  };

  return (
    <View style={containerStyle}>
      <WebView
        originWhitelist={['*']}
        webviewDebuggingEnabled={true}
        scalesPageToFit={false}
        style={webviewStyle}
        onMessage={handleLayoutChange}
        source={{
          html,
          baseUrl: 'https://oli.video/',
        }}
      />
    </View>
  );
};
