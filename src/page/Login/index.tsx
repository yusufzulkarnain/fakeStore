import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  StatusBar,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {toDp} from '../../helpers/PercentageToDp';
import GlobalText from '../../component/globalText';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../redux/actions/authAction';
import {AppDispatch, RootState} from '../../redux/store';
import Toast from 'react-native-toast-message';
import {resetState} from '../../redux/reducers/authReducer';
import {EyeOff, Eye} from 'lucide-react-native';
import {useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {loading, error, user} = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = React.useState('mor_2314');
  const [password, setPassword] = React.useState('83r5^_');
  const [showPassword, setShowPassword] = React.useState(true);
  const handleLogin = () => {
    console.log('Current username:', username);
    console.log('Current password:', password);
    dispatch(loginUser({username, password}));
  };

  React.useEffect(() => {}, [username, password]);
  React.useEffect(() => {
    if (error) {
      Toast.show({type: 'error', text1: 'Login Failed', text2: error});
      dispatch(resetState());
    }
    if (user && !error) {
      dispatch(resetState());
      Toast.show({
        type: 'success',
        text1: 'Welcome',
        text2: `Hello, ${user.username}`,
      });

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }, 500);
    }
  }, [error, user]);

  return (
    <View style={styles.container}>
      <GlobalText typeText="regular" size={toDp(20)} style={styles.title}>
        FakeStore.com
      </GlobalText>
      <Image
        source={require('../../assets/img/introFakeTore.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.conatinerLoginForm}>
        <View>
          <GlobalText
            typeText="regular"
            size={toDp(14)}
            style={styles.formTitle}>
            User Name
          </GlobalText>
          <TextInput
            value={username}
            onChangeText={setUsername}
            style={styles.textInput}
            placeholder="User Name"
          />
        </View>
        <View>
          <GlobalText
            typeText="regular"
            size={toDp(14)}
            style={styles.formTitle2}>
            Password
          </GlobalText>
          <View style={styles.rowPassword}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff size={toDp(14)} style={styles.iceye} />
              ) : (
                <Eye size={toDp(14)} style={styles.iceye} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowBtn}>
          <TouchableOpacity
            onPress={loading ? () => {} : handleLogin}
            style={styles.btnLogin}>
            {loading && (
              <ActivityIndicator
                color="#fff"
                size="small"
                style={{marginRight: toDp(10)}}
              />
            )}
            <GlobalText
              typeText="bold"
              size={toDp(14)}
              style={styles.textBtnLogin}>
              Login
            </GlobalText>
          </TouchableOpacity>
        </View>
        <View style={styles.rowForgot}>
          <TouchableOpacity>
            <GlobalText
              typeText="bold"
              size={toDp(12)}
              style={styles.textForgot}>
              Forgot Password ?
            </GlobalText>
          </TouchableOpacity>
        </View>
        <GlobalText typeText="bold" size={toDp(12)} style={styles.textOrSign}>
          or sign in with
        </GlobalText>
        <TouchableOpacity style={styles.btnGoogle} activeOpacity={1}>
          <Image
            source={require('../../assets/img/google.png')}
            style={styles.logoGoogle}
          />
          <GlobalText typeText="bold" size={toDp(14)} style={styles.textGoogle}>
            Continue with Google
          </GlobalText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : toDp(40), // Hindari notch
  },
  image: {
    width: toDp(250),
    height: toDp(250),
  },
  conatinerLoginForm: {
    backgroundColor: '#7F2C6E',
    width: Dimensions.get('window').width,
    flex: 1,
    borderTopLeftRadius: toDp(50),
    borderTopRightRadius: toDp(50),
    alignItems: 'center',
    paddingTop: toDp(28),
  },
  title: {
    // position: 'absolute',
    // top: toDp(10),
    // zIndex: 1,
    color: '#212121',
  },
  textInput: {
    backgroundColor: '#FFFFFF80',
    width: toDp(315),
    height: toDp(40),
    borderRadius: toDp(10),
    color: '#212121',
    fontSize: toDp(12),
    paddingLeft: toDp(12),
  },
  formTitle: {
    marginBottom: toDp(4),
  },
  formTitle2: {
    marginTop: toDp(8),
  },
  rowBtn: {
    marginTop: toDp(20),
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: toDp(40),
    width: toDp(315),
    borderRadius: toDp(10),
    backgroundColor: '#F7A935',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    flexDirection: 'row',
  },
  textBtnLogin: {
    color: '#FFFFFF',
  },
  rowForgot: {
    width: toDp(315),
    marginTop: toDp(4),
    padding: toDp(4),
  },
  textForgot: {
    // color: '#FFFFFF',
  },
  textVersion: {
    color: '#FFFFFF',
    position: 'absolute',
    bottom: toDp(10),
  },
  rowPassword: {
    flexDirection: 'row',
  },
  iceye: {
    position: 'absolute',
    right: toDp(16),
    bottom: toDp(14),
  },
  textOrSign: {
    color: '#EEF1F5',
    marginTop: toDp(12),
  },
  btnGoogle: {
    height: toDp(40),
    width: toDp(315),
    backgroundColor: '#EEF1F5',
    borderRadius: toDp(10),
    marginTop: toDp(12),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  logoGoogle: {
    width: toDp(28),
    height: toDp(28),
    marginRight: toDp(10),
  },
  textGoogle: {
    color: '#212121',
  },
});

export default LoginScreen;
