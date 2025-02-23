import React, {useState, useEffect, useCallback} from 'react';
import {
  NavigationContainer,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated, ActivityIndicator, View} from 'react-native';
import {Home, CircleUser, ScrollText, Heart} from 'lucide-react-native';
import HomeScreen from '../page/Home';
import CartScreen from '../page/Cart';
import DetailProductScreen from '../page/DetailProduct';
import WishListScreen from '../page/WishList';
import ProfileScreen from '../page/Profile';
import LoginScreen from '../page/Login';
import {toDp} from '../helpers/PercentageToDp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShoppingBasket} from 'lucide-react-native';
import GlobalText from '../component/globalText';

interface AnimatedTabIconProps {
  focused: boolean;
  IconComponent: any;
}
export type HomeStackParamList = {
  Home: undefined;
  DetailProductScreen: {id: number};
  CartScreen: undefined;
};
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator();
function AnimatedTabIcon({focused, IconComponent}: AnimatedTabIconProps) {
  const scaleValue = React.useRef(
    new Animated.Value(focused ? 1 : 0.8),
  ).current;

  useEffect(() => {
    Animated.spring(scaleValue, {
      toValue: focused ? 1.2 : 0.8,
      friction: 4,
      useNativeDriver: true,
    }).start();
  }, [focused]);

  return (
    <Animated.View style={{transform: [{scale: scaleValue}]}}>
      <IconComponent size={toDp(20)} color={focused ? '#0072FF' : '#808080'} />
    </Animated.View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="DetailProductScreen"
        component={DetailProductScreen}
        options={{title: 'Product', animation: 'slide_from_right'}}
      />
      <HomeStack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{title: 'Cart', animation: 'slide_from_right'}}
      />
    </HomeStack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: 'white'},
        tabBarIcon: ({focused}) => {
          const icons: {[key: string]: any} = {
            Home: Home,
            Profile: CircleUser,
            WishList: Heart,
          };
          const IconComponent = icons[route.name];
          return (
            <AnimatedTabIcon focused={focused} IconComponent={IconComponent} />
          );
        },
        tabBarLabel: ({focused}) => {
          const scaleValue = React.useRef(
            new Animated.Value(focused ? 1 : 0.8),
          ).current;

          useEffect(() => {
            Animated.spring(scaleValue, {
              toValue: focused ? 1.2 : 0.8,
              friction: 4,
              useNativeDriver: true,
            }).start();
          }, [focused]);

          return (
            <Animated.Text
              style={{
                color: focused ? '#0072FF' : '#808080',
                fontSize: toDp(12),
                fontFamily: 'Inter-SemiBold',
                transform: [{scale: scaleValue}],
              }}>
              {route.name}
            </Animated.Text>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="WishList" component={WishListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function Navigators() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        const parsedUser = user ? JSON.parse(user) : null;
        if (parsedUser) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GlobalText
          typeText="bold"
          size={toDp(30)}
          style={{color: 'grey', marginBottom: toDp(10)}}>
          FakeStore.com
        </GlobalText>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0072FF',
            width: toDp(200),
            height: toDp(200),
            borderRadius: toDp(100),
            elevation: toDp(8),
          }}>
          <ShoppingBasket size={toDp(120)} color={'#fff'} />
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <HomeTabs />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{headerShown: false, animation: 'fade'}}
            name="Home"
            component={HomeTabs}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Navigators;
