import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {toDp} from '../../helpers/PercentageToDp';
import GlobalText from '../../component/globalText';

type WishListScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const WishListScreen: React.FC<WishListScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/img/404.jpg')}
          style={styles.imageEmpty}
        />
        <GlobalText typeText="regular" size={toDp(20)} style={styles.text}>
          Under maintenance
        </GlobalText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: 'grey',
  },
  imageEmpty: {
    width: toDp(300),
    height: toDp(300),
  },
});

export default WishListScreen;
