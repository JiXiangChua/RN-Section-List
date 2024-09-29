import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};

const SectionB: React.FC = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Section B</Text>
    </View>
  );
};

export default SectionB;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'blue',
    height: 100,
  },
});
