import React, { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import GlobalStyle from 'theme/GlobalStyle';
import MainTemplate from 'templates/MainTemplate';
import HeadTitle from 'components/HeadTitle/HeadTitle';
import DotBar from 'components/DotBar/DotBar';
import SetsView from './SetsView';

function Root() {
  // const [products, setProducts] = useState(null);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { products } = await request(
  //       'https://api-eu-central-1.graphcms.com/v2/ckect5ect24hb01ys23v2gbfb/master',
  //       `
  //       {
  //         sets {
  //           title
  //           titleExtension
  //           description
  //           color {
  //             css
  //           }
  //           pictures {
  //             id
  //           }
  //           numberOfPeople
  //           listOfRecipes {
  //             name
  //             type
  //             parts {
  //               name
  //               ingredients
  //               preparation
  //             }
  //           }
  //         }
  //       }
  //   `,
  //     );

  //     setProducts(products);
  //   };

  //   fetchProducts();
  // }, []);

  // console.log(products);
  return (
    <MainTemplate>
      <HeadTitle />
      <GlobalStyle />
      <DotBar />
      <SetsView />
    </MainTemplate>
  );
}

export default Root;
