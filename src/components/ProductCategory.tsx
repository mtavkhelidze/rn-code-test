import Product from '@components/Product';
import { commonStyles } from '@styles/common';
import { styles } from '@styles/productCategory';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ICategory, IProduct } from 'types';

type Props = {
  cat: ICategory;
};

const byOrder = (a: IProduct, b: IProduct): number => {
  return a.order - b.order;
};

export const ProductCategory = (props: Props) => {
  const { products, name } = props.cat;
  return (
    <View style={{ ...styles['product-category'] }}>
      <Text
        style={{
          ...commonStyles.font,
          ...commonStyles['font--bolder'],
        }}
      >
        {name}
      </Text>
      <ScrollView style={styles['product-category__scroll']} bounces horizontal>
        {products.sort(byOrder).map(p => (
          <Product key={p.title} product={p} />
        ))}
      </ScrollView>
    </View>
  );
};
