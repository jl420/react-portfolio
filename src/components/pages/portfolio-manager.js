import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list";

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioitems: []
        };
    }

    getPortfolioItems() {
        axios.get("https://jaydenloo.devcamp.space/portfolio/portfolio_items", { withCredentials: true}).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            }) 
        }).catch(error => {
            console.log("Error in GetPortfolioItems")
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <h1>PortoflioManager</h1>
                </div>

                <div className="right-column">
                    <PortfolioSideBarList data={this.state.portfolioItem}/>
                </div>
                
            </div>
        );
    }

}