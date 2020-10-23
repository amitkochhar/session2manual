import React, { Component } from 'react';
//var React = require('react'); es5 style
import Header from './Header.js'
import Footer from './Footer.js';
import JSON from '../db.json'
import NewsDisplay from './NewsDisplay.js'

//Class component
class Home extends Component {

    constructor() {
        super();

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keyword) {
        const output = this.state.news.filter((data) => {
            return data.title.indexOf(keyword) > -1;
        })
        this.setState({ filtered: output});
    }

    render() {
        return (
            <React.Fragment>
                <Header userText={(userinput => {this.filterNews(userinput)})}/>

                <NewsDisplay newsData={this.state.filtered} />
                <Footer year="2020" month="September" />
            </React.Fragment>

        )
    }

}


export default Home;