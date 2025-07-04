import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { BlurView } from '@react-native-community/blur';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const navigationRef = useRef();

  const handleNavigationChange = () => {
    const currentRoute = navigationRef.current?.getCurrentRoute()?.name;
    setIsOverlayVisible(currentRoute !== 'Home');
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        scrollEnabled={!isOverlayVisible}
        zoomEnabled={!isOverlayVisible}
        rotateEnabled={!isOverlayVisible}
        pitchEnabled={!isOverlayVisible}
      />

      {isOverlayVisible && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={20}
          reducedTransparencyFallbackColor="white"
        />
      )}

      <NavigationContainer
        ref={navigationRef}
        onReady={handleNavigationChange}
        onStateChange={handleNavigationChange}
      >
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}
