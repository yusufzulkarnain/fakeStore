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
import {
  getProductDetail,
  getAllProducts,
} from '../../redux/actions/productAction';
import {setRelatedCategory} from '../../redux/reducers/productReducer';
import {HomeStackParamList} from '../../navigators/Navigators';
import {
  resetStateDetail,
  resetStateRelated,
} from '../../redux/reducers/productReducer';
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
  const {productDetail, loadingDetail, errorDetail, itemsRelated} = useSelector(
    (state: RootState) => state.products,
  );

  const [forceLoading, setForceLoading] = React.useState(true);

  useFocusEffect(
    React.useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      dispatch(resetStateDetail());
      dispatch(resetStateRelated());
      setForceLoading(true);
      dispatch(getProductDetail(id)).finally(() => {
        setForceLoading(false);
        setRelatedCategory(productDetail?.category);
      });
      if (itemsRelated) {
        itemsRelated.filter(item => item.category !== productDetail?.category);
      }
      // dispatch(getAllProducts()).finally(() => {
      //   if (items.length > 0) {
      //     setRelated(
      //       items.filter(
      //         item =>
      //           item.category === productDetail?.category &&
      //           item.id !== productDetail?.id,
      //       ),
      //     );
      //   }
      // });

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
        <ActivityIndicator size="large" color="#7F2C6E" />
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
              <Star size={toDp(14)} color={'#FFC107'} fill={'#FFC107'} />
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
        <View style={styles.separatorLine} />
        <View style={styles.rowRelated}>
          <GlobalText
            typeText="bold"
            size={toDp(14)}
            style={styles.textRelatedProduct}>
            Related Product {productDetail?.category}
          </GlobalText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.rowRelatedProduct}>
            {itemsRelated.length > 0 &&
              itemsRelated.map((item, index) => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: toDp(12),
                  }}
                  key={index}>
                  <Image
                    source={{uri: item.image}}
                    style={styles.imageRelated}
                    resizeMode="contain"
                  />
                </View>
              ))}
          </ScrollView>
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
    backgroundColor: '#F2E8EE',
    width: '100%',
    height: toDp(4),
    alignSelf: 'center',
  },
  rowBtn: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: toDp(16),
    width: '100%',
    borderTopWidth: toDp(1),
    borderColor: '#D3DDEB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#7F2C6E',
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
  rowRelated: {
    paddingHorizontal: toDp(10),
    paddingVertical: toDp(12),
  },
  textRelatedProduct: {
    // color: '#0072FF',
  },
  imageRelated: {
    width: toDp(80),
    height: toDp(80),
  },
  rowRelatedProduct: {
    gap: toDp(12),
    paddingVertical: toDp(12),
  },
});

export default DetailProductScreen;
