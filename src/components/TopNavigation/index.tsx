import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const TopNavigation: React.FC = () => {
  return (
    <SafeAreaView style={styles.bar}>
      <Text>Nav Bar</Text>
    </SafeAreaView>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 100,
  },
});
