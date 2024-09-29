import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text} from 'react-native';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import StickyFooter from './footer';

type Props = {};

const SECTIONS = [
  {
    title: 'Section A Header',
    data: [<SectionA />],
  },
  {
    title: 'Section B Header',
    data: [<SectionB />],
  },
  {
    title: 'Section C Header',
    data: [<SectionC />],
  },
];

const PDPLite: React.FC = (props: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => item}
      />
      <StickyFooter />
    </SafeAreaView>
  );
};

export default PDPLite;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
});
