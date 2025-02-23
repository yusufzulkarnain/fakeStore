import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {toDp} from '../../helpers/PercentageToDp';
import GlobalText from '../../component/globalText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Mail, Smartphone} from 'lucide-react-native';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

interface User {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loadingLogout, setLoadingLogout] = React.useState(false);

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    const parsedUser = user ? JSON.parse(user) : null;
    console.log(parsedUser);
    setUser(parsedUser);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  const getInitialsName = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  };

  const handleLogout = async () => {
    setLoadingLogout(true);
    await AsyncStorage.removeItem('user');
    await AsyncStorage.clear();
    setTimeout(() => {
      setLoadingLogout(false);
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentHeader}>
        <View>
          <GlobalText
            typeText="bold"
            size={toDp(24)}
            style={{color: '#FFFFFF'}}>
            Welcome
          </GlobalText>
          <GlobalText
            typeText="regular"
            size={toDp(16)}
            style={{color: '#FFFFFF'}}>
            To your profile FakeStore.com
          </GlobalText>
        </View>
        <View style={styles.cardProfile}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.roundeduser}>
              <GlobalText
                typeText="bold"
                size={toDp(32)}
                style={{color: '#FFFFFF'}}>
                {getInitialsName(
                  user?.name?.firstname + ' ' + user?.name?.lastname,
                )}
              </GlobalText>
            </View>
            <GlobalText
              typeText="bold"
              style={{marginLeft: toDp(12), fontSize: toDp(18)}}>
              {user?.name?.firstname + ' ' + user?.name?.lastname}
            </GlobalText>
          </View>
          <View style={styles.rowEmail}>
            <View style={styles.rowIconEmail}>
              <Mail size={toDp(12)} style={styles.icon} />
              <GlobalText typeText="regular" size={toDp(12)}>
                {user?.email}
              </GlobalText>
            </View>
            <View style={[styles.rowIconEmail, {marginTop: toDp(4)}]}>
              <Smartphone size={toDp(12)} style={styles.icon} />
              <GlobalText typeText="regular" size={toDp(12)}>
                {user?.phone}
              </GlobalText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.rowAddress}>
        <View>
          <GlobalText typeText="bold" size={toDp(14)}>
            Address
          </GlobalText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: toDp(2),
          }}>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{width: toDp(50)}}>
            City
          </GlobalText>
          <GlobalText typeText="regular" size={toDp(12)}>
            :
          </GlobalText>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{marginLeft: toDp(4)}}>
            {' '}
            {user?.address.city}
          </GlobalText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: toDp(2),
          }}>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{width: toDp(50)}}>
            number
          </GlobalText>
          <GlobalText typeText="regular" size={toDp(12)}>
            :
          </GlobalText>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{marginLeft: toDp(4)}}>
            {' '}
            {user?.address.number}
          </GlobalText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: toDp(2),
          }}>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{width: toDp(50)}}>
            street
          </GlobalText>
          <GlobalText typeText="regular" size={toDp(12)}>
            :
          </GlobalText>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{marginLeft: toDp(4)}}>
            {' '}
            {user?.address.street}
          </GlobalText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: toDp(2),
          }}>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{width: toDp(50)}}>
            zipcode
          </GlobalText>
          <GlobalText typeText="regular" size={toDp(12)}>
            :
          </GlobalText>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={{marginLeft: toDp(4)}}>
            {' '}
            {user?.address.zipcode}
          </GlobalText>
        </View>
      </View>
      <View style={styles.rowBtn}>
        <TouchableOpacity
          style={styles.btn}
          onPress={loadingLogout ? () => {} : handleLogout}>
          {loadingLogout && (
            <ActivityIndicator
              size="small"
              color="#FFFFFF"
              style={{marginRight: toDp(8)}}
            />
          )}

          <GlobalText typeText="bold" size={toDp(16)} style={styles.txtBtn}>
            Logout
          </GlobalText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentHeader: {
    backgroundColor: '#0072FF',
    height: Dimensions.get('window').height / 2 - toDp(120),
    width: Dimensions.get('window').width,
    paddingHorizontal: toDp(16),
    paddingTop: toDp(24),
  },
  cardProfile: {
    backgroundColor: '#FFFFFF',
    elevation: toDp(4),
    borderRadius: toDp(8),
    position: 'absolute',
    bottom: toDp(-30),
    alignSelf: 'center',
    zIndex: 1,
    paddingVertical: toDp(12),
    paddingHorizontal: toDp(16),
    width: toDp(322),
  },
  roundeduser: {
    width: toDp(60),
    height: toDp(60),
    borderRadius: toDp(50),
    backgroundColor: '#D3DDEB',
    elevation: toDp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowEmail: {
    marginTop: toDp(12),
  },
  rowIconEmail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: toDp(8),
  },
  rowAddress: {
    borderWidth: toDp(1),
    marginTop: toDp(50),
    paddingHorizontal: toDp(16),
    borderColor: '#D3DDEB',
    paddingVertical: toDp(12),
  },
  rowBtn: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: toDp(10),
    width: '100%',
    borderTopWidth: toDp(1),
    borderColor: '#D3DDEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#0072FF',
    width: toDp(322),
    height: toDp(40),
    borderRadius: toDp(8),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: toDp(4),
  },
  txtBtn: {
    color: '#fff',
  },
});

export default ProfileScreen;
