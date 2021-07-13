import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from '../ProductRating/ProductRating'
import * as S from './productItem.style'
import PropTypes from 'prop-types'

export default function ProductItem({ rating }) {
  return (
    <S.Product>
      <Link to="">
        <S.ProductItem>
          <S.ProductItemImage>
            <img src="https://cf.shopee.vn/file/fa4d1dd5180ef9420b6f1fb92ea827f2_tn" alt="" />
          </S.ProductItemImage>
          <S.ProductItemInfo>
            <S.ProductItemTitle>Pin AA và AAA sạc tái sử dụng chính hãng bền bỉ</S.ProductItemTitle>
            <S.ProductItemPrice>
              <S.ProductItemPriceOriginal>đ 8.700</S.ProductItemPriceOriginal>
              <S.ProductItemPriceSale>đ 8.700</S.ProductItemPriceSale>
            </S.ProductItemPrice>
            <S.ProductItemMeta>
              <ProductRating />
              <S.ProductItemSold>
                <span>1.7k</span>
                <span>Đã bán</span>
              </S.ProductItemSold>
            </S.ProductItemMeta>
          </S.ProductItemInfo>
        </S.ProductItem>
      </Link>
    </S.Product>
  )
}

ProductItem.propTypes = {
  rating: PropTypes.number
}
