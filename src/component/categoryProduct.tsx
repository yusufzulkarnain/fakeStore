import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../redux/actions/productAction';
import {RootState, AppDispatch} from '../redux/store';
import {toDp} from '../helpers/PercentageToDp';
import GlobalText from './globalText';
import {SlidersHorizontal} from 'lucide-react-native';
import {LoadingCategory} from './loadingProduct';

interface RenderItemProps {
  title: string;
  index: number;
}

interface CategoryProductProps {
  onpress: (category: string) => void;
  onPressFilter: () => void;
  selectedCategory: string | null;
  loading: boolean;
}

const CategoryProduct: React.FC<CategoryProductProps> = props => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(
    (state: RootState) => state.products.itemsCategories,
  );
  const {onpress, onPressFilter, selectedCategory, loading} = props;
  const RenderItems: React.FC<RenderItemProps> = ({title, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onpress(title)}
        style={[
          styles.header,
          {
            borderWidth: selectedCategory === title ? 1 : 0,
            backgroundColor: selectedCategory === title ? '#fff' : '#f1f1f1',
            borderColor: selectedCategory === title ? '#7F2C6E' : '#f1f1f1',
          },
        ]}>
        <GlobalText
          typeText="italic"
          size={toDp(12)}
          style={{color: selectedCategory === title ? '#7F2C6E' : '#000'}}>
          {title}
        </GlobalText>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: toDp(12),
        backgroundColor: '#FFFFFF',
      }}>
      <TouchableOpacity style={styles.btnFilter} onPress={onPressFilter}>
        <SlidersHorizontal size={toDp(18)} color={'#fff'} />
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* <LoadingCategory /> */}
        {loading || categories.length === 0 ? (
          <LoadingCategory />
        ) : (
          categories.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                padding: toDp(8),
              }}>
              <RenderItems key={index} title={item} index={index} />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: toDp(8),
    borderRadius: toDp(8),
  },
  contentContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  btnFilter: {
    backgroundColor: '#7F2C6E',
    // backgroundColor: '#D3DDEB',
    width: toDp(26),
    height: toDp(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: toDp(4),
    marginRight: toDp(8),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default CategoryProduct;
