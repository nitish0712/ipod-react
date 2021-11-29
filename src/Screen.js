import React from "react";
import Home from './Home';
import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';
import Playlist from './Playlist';



class Screen extends React.Component{

    render(){
       return(
        <div style={styles.screen} id='screen-container'>
            {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
            {this.props.activePage==='Songs'?<Songs activeItem={this.props.activeItem}/> : null}
            {this.props.activePage==='Albums'?<Albums activeItem={this.props.activeItem}/> : null}
            {this.props.activePage==='Artists'?<Artists activeItem={this.props.activeItem}/> : null}
            {this.props.activePage==='Playlist'?<Playlist activeItem={this.props.activeItem}/> : null}
            
        </div>
       )
    }
}


const styles = {
    screen : {
        height : '50%',
        width : '95%',
        borderRadius : '12px',
        backgroundColor : 'white',
        border : '2px solid black',
        marginTop : '1rem'
    }
}

export default Screen;