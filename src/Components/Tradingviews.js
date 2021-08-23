import React, { Component } from 'react';


export default class Tradingviews extends React.Component {
    
    render(){
        return(
            <>
              <iframe src="./tradingview.html?symbol=ADAUSDT" width="100%" height="620" frameborder="0" scrolling="no"></iframe>
            </>
        );
    }
}