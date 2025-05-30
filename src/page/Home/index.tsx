import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import {toDp} from '../../helpers/PercentageToDp';
import GlobalText from '../../component/globalText';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from './../../redux/store';
import {getAllProducts, getCategories} from '../../redux/actions/productAction';
import {
  setSearchQuery,
  setModalFilter,
  setSelectedCategory,
  setActiveIndex,
  resetState,
} from '../../redux/reducers/productReducer';
import {addToCart} from '../../redux/actions/cartAction';
import {Heart, ShoppingBasket, Search} from 'lucide-react-native';
import CategoryProduct from '../../component/categoryProduct';
import Toast from 'react-native-toast-message';
import {LoadingProduct} from '../../component/loadingProduct';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    items,
    loading,
    searchQuery,
    selectedCategory,
    error,
    errorCategories,
    loadingCategories,
  } = useSelector((state: RootState) => state.products);
  const {items: cartItems} = useSelector((state: RootState) => state.cart);
  const cartItemCount = cartItems.length;

  interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  }

  React.useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getCategories());
  }, [dispatch]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetState());
      dispatch(getAllProducts());
      console.log(loadingCategories);
    }, [dispatch]),
  );

  React.useEffect(() => {
    const showToast = (message: string | null) => {
      if (message) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: message,
        });
      }
    };
    showToast(error);
    showToast(errorCategories);
  }, [error, errorCategories]);

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory
      ? item.category === selectedCategory
      : true;
    const matchesSearchQuery = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearchQuery;
  });

  const handleCategoryPress = (category: string) => {
    const currentCategory = selectedCategory;
    const newCategory = currentCategory === category ? null : category;
    // console.log('newCategory=>', newCategory);
    dispatch(setSelectedCategory(newCategory));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerSearch}>
        <Search size={toDp(18)} style={styles.iconSearch} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search product..."
          value={searchQuery}
          onChangeText={text => dispatch(setSearchQuery(text))}
        />
        <TouchableOpacity
          style={styles.btnCart}
          onPress={() => navigation.navigate('CartScreen')}>
          <View style={styles.absoluteBadge}>
            <GlobalText
              typeText="bold"
              size={toDp(10)}
              style={styles.numberCount}>
              {cartItemCount}
            </GlobalText>
          </View>
          <ShoppingBasket size={toDp(18)} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>
      <View style={styles.separatorLine} />
      <CategoryProduct
        onPressFilter={() => console.log('filter')}
        onpress={handleCategoryPress}
        selectedCategory={selectedCategory}
        loading={loadingCategories}
      />
      <View style={styles.separatorLine} />
      {loading ? (
        <LoadingProduct />
      ) : (
        <View>
          <FlatList<Product>
            data={filteredItems}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            key={'2-columns'}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            contentContainerStyle={{
              paddingBottom: toDp(150),
              paddingTop: toDp(8),
            }}
            ListFooterComponent={() => (
              <View style={styles.noMoreProduct}>
                <GlobalText typeText="italic" size={toDp(12)}>
                  ---- No more product ----
                </GlobalText>
              </View>
            )}
            renderItem={({item}: {item: Product}) => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <View style={styles.cardProduct}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailProductScreen', {id: item.id})
                    }>
                    <Image
                      source={{uri: item.image}}
                      style={styles.imageProduct}
                      resizeMode="contain"
                    />
                    <GlobalText typeText="regular" size={toDp(10)}>
                      {item.title.split(' ').slice(0, 5).join(' ')}
                    </GlobalText>
                  </TouchableOpacity>

                  <View style={styles.rowPrice}>
                    <GlobalText
                      typeText="bold"
                      size={toDp(12)}
                      style={styles.textPrice}>
                      ${item.price}
                    </GlobalText>
                    <TouchableOpacity>
                      <Heart size={toDp(14)} color={'#808080'} />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.addToCartButton}
                  onPress={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        name: item.title,
                        price: item.price,
                        image: item.image,
                        description: item.description,
                      }),
                    )
                  }>
                  <ShoppingBasket
                    size={toDp(14)}
                    style={styles.icCart}
                    color={'#fff'}
                  />
                  <GlobalText
                    typeText="regular"
                    size={toDp(11)}
                    style={styles.textBtnAddcard}>
                    Add to Cart
                  </GlobalText>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    marginBottom: 20,
  },
  imageProduct: {
    width: '100%',
    height: toDp(100),
    marginBottom: toDp(10),
    borderRadius: 8,
  },
  addToCartButton: {
    marginBottom: toDp(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F2C6E',
    width: Dimensions.get('window').width / 2 - toDp(20),
    borderBottomLeftRadius: toDp(8),
    borderBottomRightRadius: toDp(8),
    height: toDp(30),
    elevation: 4,
    flexDirection: 'row',
  },
  textBtnAddcard: {
    color: '#fff',
  },
  cardProduct: {
    flex: 1,
    marginHorizontal: toDp(10),
    padding: toDp(10),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: toDp(8),
    borderTopRightRadius: toDp(8),
    elevation: 4,
    width: Dimensions.get('window').width / 2 - toDp(20),
    height: toDp(180),
  },
  textPrice: {
    color: 'green',
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: toDp(6),
    left: toDp(10),
  },
  icCart: {
    marginRight: toDp(8),
  },
  searchInput: {
    flex: 1,
    height: toDp(40),
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: toDp(8),
    // margin: toDp(10),
    paddingLeft: toDp(30),
    backgroundColor: '#FFFFFF80',
    marginRight: toDp(10),
    fontFamily: 'Inter-Regular',
  },
  containerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: toDp(12),
    paddingVertical: toDp(16),
    backgroundColor: '#FFFFFF',
    elevation: 4,
  },
  btnCart: {
    width: toDp(30),
    height: toDp(30),
    borderRadius: toDp(15),
    backgroundColor: '#7F2C6E',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  absoluteBadge: {
    position: 'absolute',
    top: toDp(-2),
    right: toDp(-2),
    backgroundColor: 'red',
    borderRadius: toDp(16),
    width: toDp(16),
    height: toDp(16),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  numberCount: {
    color: '#fff',
  },
  noMoreProduct: {
    alignItems: 'center',
    marginTop: toDp(12),
  },
  separatorLine: {
    backgroundColor: '#F2E8EE',
    // width: toDp(328),
    width: '100%',
    height: toDp(4),
    alignSelf: 'center',
  },
  iconSearch: {
    position: 'absolute',
    left: toDp(20),
  },
});

export default HomeScreen;
