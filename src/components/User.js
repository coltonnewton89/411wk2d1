//you're currently at 51:53 on the video ;-)

import React, {Component} from 'react';
import UserDetails from './userDetails';

class User  extends Component {
    state = { 
        showDetails : false
     }
     toggleDetails = () => this.setState({ showDetails: !this.state.showDetails})
    render() {
        const {name, picture} = this.props.user
        return ( 
        <div>
            <img src={picture.large} />
            <p>{name.first}</p>
            <button onClick={this.toggleDetails}>Show Details</button>
            <UserDetails show={this.state.showDetails} user={this.props.user}/> 
        </div> );
    }
}
 
export default User;
