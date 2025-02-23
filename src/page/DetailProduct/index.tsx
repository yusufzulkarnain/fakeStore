import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Image,
  View,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {toDp} from '../../helpers/PercentageToDp';
import GlobalText from '../../component/globalText';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {getProductDetail} from '../../redux/actions/productAction';
import {HomeStackParamList} from '../../navigators/Navigators';
import {resetStateDetail} from '../../redux/reducers/productReducer';
import {Star, ShoppingBasket} from 'lucide-react-native';

type DetailProductScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'DetailProductScreen'
>;

const DetailProductScreen: React.FC<DetailProductScreenProps> = ({
  navigation,
  route,
}) => {
  const {id} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const {productDetail, loadingDetail, errorDetail} = useSelector(
    (state: RootState) => state.products,
  );
  const [forceLoading, setForceLoading] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      dispatch(resetStateDetail());
      setForceLoading(true);
      dispatch(getProductDetail(id)).finally(() => {
        setForceLoading(false);
      });
      return () => {
        navigation.getParent()?.setOptions({tabBarStyle: {display: 'flex'}});
      };
    }, [dispatch, navigation, id]),
  );

  if (loadingDetail || forceLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <ActivityIndicator size="large" color="#0072FF" />
        <GlobalText
          typeText="regular"
          style={{marginTop: toDp(10)}}
          size={toDp(12)}>
          Loading...
        </GlobalText>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{paddingBottom: toDp(100)}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.productImageSection}>
          <Image
            source={{uri: productDetail?.image}}
            style={styles.imageProduct}
            resizeMode="contain"
          />
        </View>
        <View style={styles.rowTitle}>
          <GlobalText typeText="bold" size={toDp(12)}>
            {productDetail?.title}
          </GlobalText>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: toDp(4),
            }}>
            <GlobalText
              typeText="italic"
              size={toDp(12)}
              style={styles.textPrice}>
              ${productDetail?.price}
            </GlobalText>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Star size={toDp(14)} color={'#FFC107'} />
              <GlobalText
                typeText="italic"
                size={toDp(12)}
                style={{marginLeft: toDp(4)}}>
                {productDetail?.rating.rate}
              </GlobalText>
            </View>
          </View>
        </View>
        <View style={styles.separatorLine} />
        <View style={styles.rowDescription}>
          <GlobalText
            typeText="regular"
            size={toDp(12)}
            style={styles.textDesc}>
            {productDetail?.description}
          </GlobalText>
        </View>
      </ScrollView>
      <View style={styles.rowBtn}>
        <TouchableOpacity style={styles.btn}>
          <ShoppingBasket
            size={toDp(16)}
            color={'#FFFF'}
            style={styles.icCart}
          />
          <GlobalText typeText="bold" size={toDp(14)} style={styles.txtBtn}>
            Add to cart
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
  productImageSection: {
    width: '100%',
    backgroundColor: '#FFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: toDp(10),
    elevation: toDp(1),
    // borderWidth: toDp(1),
    marginTop: toDp(12),
  },
  imageProduct: {
    width: toDp(300),
    height: toDp(300),
  },
  rowTitle: {
    paddingHorizontal: toDp(16),
    paddingVertical: toDp(10),
  },
  textPrice: {
    color: 'green',
  },
  rowDescription: {
    paddingHorizontal: toDp(16),
    paddingVertical: toDp(10),
  },
  textDesc: {
    lineHeight: toDp(18),
  },
  separatorLine: {
    backgroundColor: '#D3DDEB',
    width: '100%',
    height: toDp(4),
    alignSelf: 'center',
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
  icCart: {
    marginRight: toDp(8),
  },
});

export default DetailProductScreen;
