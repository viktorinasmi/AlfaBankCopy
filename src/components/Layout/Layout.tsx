import {ReactNode} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';

interface ILayout {
  children: ReactNode;
  isScrollView?: boolean;
}

export const Layout = ({children, isScrollView = true}: ILayout) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.layout}>
        {isScrollView ? <ScrollView>{children}</ScrollView> : children}
      </View>
    </SafeAreaView>
  );
};
