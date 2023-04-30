import { createGlobalStyle } from 'styled-components';
import { ProductSansBold, ProductSansRegular } from './ProductSans';

export const ProductSansFont = createGlobalStyle`
  @font-face {
    font-family: 'Product Sans Regular';
    font-weight: 400;
    src: url(${ProductSansRegular}) format('woff');
  }
  @font-face {
    font-family: 'Product Sans Bold';
    font-weight: 600;
    src: url(${ProductSansBold}) format('woff');
  }
`;
