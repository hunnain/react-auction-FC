import React, { Component, lazy } from 'react'


class Dashboard extends Component {

    render() {
        return (
            <>
                <div class="mt-40">
                    <ul class="side-nav">
                        <li class={this.props.profile === true && "active"} onClick={()=>this.props.ChangeView('AccountProfile')}>
                            <img src={require('../../assets/icons/xd/icons/profile.png')} alt="" />
                            <a class="ml-20">Profile</a>
                        </li>
                        <li class={this.props.billing === true && "active"} onClick={()=>this.props.ChangeView('AccountBilling')}>
                            <img src={require('../../assets/icons/xd/icons/billing.png')} alt="" />
                            <a class="ml-20">Billing</a>
                        </li>
                        <li class={this.props.bids === true && "active"} onClick={()=>this.props.ChangeView('AccountBid')}>
                            <img src={require('../../assets/icons/xd/icons/bids.png')} alt="" />
                            <a class="ml-20" >Bids</a>
                        </li>
                        <li class={this.props.listing === true && "active"} onClick={()=>this.props.ChangeView('AccountListing')}>
                            <img src={require('../../assets/icons/xd/icons/listing.png')} alt="" />
                            <a class="ml-20" >Listing</a>
                        </li>
                        <li class={this.props.watchlist === true && "active"} onClick={()=>this.props.ChangeView('AccountWatchList')}>
                            <img src={require('../../assets/icons/xd/icons/watchlist.png')} alt="" />
                            <a class="ml-20">Watchlist</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Dashboard;
