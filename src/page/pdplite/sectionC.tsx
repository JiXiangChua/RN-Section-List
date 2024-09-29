import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {};

const SectionC: React.FC = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Section C</Text>
    </View>
  );
};

export default SectionC;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'green',
    height: 100,
  },
});
