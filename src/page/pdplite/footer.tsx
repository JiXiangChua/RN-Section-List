import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};

const StickyFooter: React.FC = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Sticky Footer</Text>
    </View>
  );
};

export default StickyFooter;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: 60,
  },
});
