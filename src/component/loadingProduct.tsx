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
import {getCategories} from '../redux/actions/productAction';
import {toDp} from '../helpers/PercentageToDp';
import GlobalText from './globalText';
import {SlidersHorizontal} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const LoadingProduct: React.FC = props => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={item => item.toString()}
        showsVerticalScrollIndicator={false}
        key={'2-columns'}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          paddingBottom: toDp(150),
          paddingTop: toDp(8),
        }}
        renderItem={({item}) => <ShimmerPlaceholder style={styles.container} />}
      />
    </View>
  );
};

export const LoadingCategory: React.FC = props => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4].map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            padding: toDp(8),
          }}>
          <ShimmerPlaceholder key={index} style={styles.shimmerCategory} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - toDp(20),
    height: toDp(180),
    marginHorizontal: toDp(10),
    marginBottom: toDp(12),
    borderRadius: toDp(8),
  },
  shimmerCategory: {
    width: toDp(100),
    height: toDp(32),
    borderRadius: toDp(4),
  },
});
