import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store';
import {toDp} from '../../helpers/PercentageToDp';
import GlobalText from '../../component/globalText';
import {AppDispatch} from '../../redux/store';
import {updateQty} from '../../redux/reducers/cartReducer';

type cartScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const CartScreen: React.FC<cartScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {items: cartItems} = useSelector((state: RootState) => state.cart);
  useFocusEffect(
    React.useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      return () => {
        navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex'}});
      };
    }, [navigation]),
  );
  const handleQtyChange = (id: number, qty: number) => {
    dispatch(updateQty({id, qty}));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={cartItems}
          contentContainerStyle={{
            paddingBottom: toDp(100),
            paddingHorizontal: toDp(16),
            paddingTop: toDp(16),
          }}
          renderItem={({item}) => (
            <View style={styles.containerContent}>
              <View>
                <Image
                  source={{uri: (item as any).image}}
                  style={styles.imageProduct}
                  resizeMode="contain"
                />
              </View>
              <View style={{marginLeft: toDp(8)}}>
                <GlobalText
                  typeText="bold"
                  size={toDp(12)}
                  style={styles.textTitleProduct}>
                  {item.name}
                </GlobalText>
                <GlobalText
                  typeText="italic"
                  size={toDp(12)}
                  style={styles.textprice}>
                  ${item.price}
                </GlobalText>
              </View>

              <View style={styles.rowQty}>
                <TouchableOpacity
                  onPress={() => handleQtyChange(item.id, (item.qty ?? 0) - 1)}
                  style={{
                    borderRightWidth: toDp(1),
                    paddingHorizontal: toDp(10),
                    paddingVertical: toDp(4),
                    borderColor: '#D3DDEB',
                  }}>
                  <GlobalText typeText="bold" size={toDp(12)}>
                    -
                  </GlobalText>
                </TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: toDp(10),
                    paddingVertical: toDp(4),
                  }}>
                  <GlobalText typeText="regular" size={toDp(12)}>
                    {item.qty}
                  </GlobalText>
                </View>
                <TouchableOpacity
                  onPress={() => handleQtyChange(item.id, (item.qty ?? 0) + 1)}
                  style={{
                    borderLeftWidth: toDp(1),
                    paddingHorizontal: toDp(10),
                    paddingVertical: toDp(4),
                    borderColor: '#D3DDEB',
                  }}>
                  <GlobalText typeText="bold" size={toDp(12)}>
                    +
                  </GlobalText>
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../../assets/img/empty1.jpg')}
                style={styles.imageEmpty}
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.rowBtn}>
        <View>
          <GlobalText
            typeText="bold"
            size={toDp(16)}
            style={styles.textGrandPrice}>
            Total price:
          </GlobalText>
          <GlobalText
            typeText="italic"
            size={toDp(16)}
            style={styles.textGrandPrice}>
            $
            {cartItems
              .reduce((total, item) => total + item.price * (item.qty ?? 0), 0)
              .toFixed(2)}
          </GlobalText>
        </View>
        <View>
          <TouchableOpacity style={styles.btnCheckout}>
            <GlobalText
              typeText="bold"
              size={toDp(16)}
              style={styles.textCheckout}>
              Checkout {'('}
              {cartItems.length}
              {')'}
            </GlobalText>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textTitleProduct: {
    width: toDp(185),
  },
  containerContent: {
    borderWidth: toDp(1),
    marginBottom: toDp(10),
    elevation: toDp(2),
    backgroundColor: '#FFFFFF',
    borderRadius: toDp(4),
    flexDirection: 'row',
    padding: toDp(8),
    borderColor: '#D3DDEB',
  },
  imageProduct: {
    width: toDp(100),
    height: toDp(100),
  },
  textprice: {
    color: 'green',
    marginTop: toDp(4),
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: toDp(1),
    borderTopColor: '#D3DDEB',
    paddingHorizontal: toDp(16),
    paddingVertical: toDp(16),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textGrandPrice: {
    color: 'green',
  },
  btnCheckout: {
    backgroundColor: '#7F2C6E',
    paddingHorizontal: toDp(10),
    paddingVertical: toDp(8),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: toDp(4),
    elevation: toDp(2),
  },
  textCheckout: {
    color: '#fff',
  },
  rowQty: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: toDp(8),
    right: toDp(12),
    borderWidth: toDp(1),
    borderRadius: toDp(4),
    borderColor: '#D3DDEB',
    backgroundColor: '#fff',
  },
  imageEmpty: {
    width: toDp(300),
    height: toDp(300),
  },
});

export default CartScreen;
