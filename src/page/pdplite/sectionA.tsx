import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

type Props = {};

const SectionA: React.FC = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Section A</Text>
    </View>
  );
};

export default SectionA;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'red',
    height: Dimensions.get('screen').height / 2,
  },
});
