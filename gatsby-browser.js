/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import App from './src/App'

/**
 * Am importing App because
 * need to pass App db state
 * as db needs to be created async
 */
export const wrapRootElement = ({ element }) => {
  const GlobalStyle = createGlobalStyle`
    html {
      overflow: hidden;
    }

    /* scrollbars */

    ::-webkit-scrollbar {
    width: 12px;
    background: rgba(255, 253, 231, 0.1);
    }

    ::-webkit-scrollbar:horizontal {
    height: 12px;
    }

    ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.4);
    }

    ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.5);
    background: rgba(85, 85, 85, 0.05);
    }

    ::-webkit-scrollbar-corner {
    background: rgba(0, 0, 0, 0);
    }


    /*
    * seems that overflow:hidden is necessary
    * for all relfex-elements
    * BUT: map is not shown with it...
    */

    .reflex-element:not(.karte) {
    border-right: 0 !important;
    border-left: 0 !important;
    }

    /*
    .reflex-element:not(.karte) > div {
    overflow: hidden;
    }*/

    .reflex-splitter {
    background-color: #fffde7 !important;
    border-right: 1px solid #fffde7 !important;
    border-left: 1px solid #fffde7 !important;
    }

    .reflex-splitter:hover {
    background-color: #fff59d !important;
    border-right: 1px solid #fff59d !important;
    border-left: 1px solid #fff59d !important;
    }
  `
  return (
    <>
      <GlobalStyle />
      <App element={element} />
    </>
  )
}
