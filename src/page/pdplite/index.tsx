import React from 'react';
import {View, SafeAreaView, SectionList, StyleSheet, Text} from 'react-native';
import SectionA from './sectionA';
import SectionB from './sectionB';
import SectionC from './sectionC';
import StickyFooter from './footer';
import TopNavigation from '../../components/TopNavigation';

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
  {
    title: 'Section C Header',
    data: [<SectionC />],
  },
  {
    title: 'Section C Header',
    data: [<SectionC />],
  },
  {
    title: 'Section C Header',
    data: [<SectionC />],
  },
  {
    title: 'Section C Header',
    data: [<SectionC />],
  },
];

const PDPLite: React.FC = (props: Props) => {
  return (
    <View style={styles.screen}>
      <TopNavigation />
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => item}
      />
      <StickyFooter />
    </View>
  );
};

export default PDPLite;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FEFEFE',
  },
});
