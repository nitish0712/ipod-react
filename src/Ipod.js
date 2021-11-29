import React from "react";
import ZingTouch from 'zingtouch';
import Screen from './Screen';
import { FaFastBackward, FaFastForward, FaPlay, FaPause} from 'react-icons/fa';
import { HiMenu} from 'react-icons/hi';
// import { faFastBackward } from "@fortawesome/free-solid-svg-icons";



class Ipod extends React.Component{

    constructor(){
        super();
        this.state = {
            activeItem : 'Songs',
            activePage : 'Home',
            enter : 0,
            play : true
        }
    }

    rotateWheel = () => {

        var containerElement = document.getElementById('inner-container');
        var activeRegion = new ZingTouch.Region(containerElement);
        // var childElement = document.getElementById('inner-container');
        var change = 0;
        var self = this;
        self.state.enter = self.state.enter + 1;
        
        if(self.state.enter < 2){
            activeRegion.bind(containerElement, 'rotate', function(event){
                //Perform Operations
                
                var newAngle = event.detail.distanceFromLast;
                console.log(newAngle);
        
                if(newAngle < 0){
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'Songs'){
                                self.setState({
                                    activeItem : "Albums"
                                })
                            }else if(self.state.activeItem === 'Albums'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "Playlist"
                                })
                            }else if(self.state.activeItem === 'Playlist'){
                                self.setState({
                                    activeItem : "Songs"
                                })
                            }
                        }
                    }
                }else{
                    console.log(change);
                    change++;
                    if(change === 15){
                        console.log("change state");
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            if(self.state.activeItem === 'Songs'){
                                self.setState({
                                    activeItem : "Playlist"
                                })
                            }else if(self.state.activeItem === 'Playlist'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "Albums"
                                })
                            }else if(self.state.activeItem === 'Albums'){
                                self.setState({
                                    activeItem : "Songs"
                                })
                            }
                        }
                    }
                }
                });
        }else{
            console.log("Not allowed to enter")
        }
        
    }

    changePage = () => {

        this.setState({
            activeItem : this.state.activeItem,
            activePage : this.state.activeItem
        })
        
    }

    changePageToHomeScreen = () => {

        this.setState({
            activeItem : 'Songs',
            activePage : 'Home'
        })
        
    }

    

    componentDidMount(){
        
        console.log(this.state)
    }

    render(){
        return(
            <div style = {styles.ipodContainer}>

                <Screen activeItem={this.state.activeItem} activePage={this.state.activePage}  />

                <div id='inner-container' style = {styles.wheel} onMouseOver={this.rotateWheel}>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.menuButton}>
                        <div onClick={this.changePageToHomeScreen} style = {styles.image} ><HiMenu/></div>
                        </div>
                        
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.middleButtons}>
                            
                            <div style = {styles.image} ><FaFastBackward/></div>
                            <div onClick={this.changePage} style={{background: 'white' , width : '5rem' , height : '5rem' , borderRadius : '50%'}}></div>
                            <div style = {styles.image} ><FaFastForward/></div>
                            
                        </div>
                    </div>
                    <div style = {styles.buttonContainer}>
                        <div style = {styles.playButton}>
                        <span style = {styles.image} ><FaPlay/></span> &nbsp;<span style = {styles.image} ><FaPause/></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    ipodContainer : {
        height : '33rem',
        width : '20rem',
        backgroundImage: 'radial-gradient(#adb1b5, #4d4f50)',
        margin : '4rem auto',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center',
        borderRadius : '24px'
        
    },
    wheel : {
        width : '75%',
        height : '40%',
        margin : '1rem auto',
        backgroundColor : '#4b4e52',
        borderRadius : '50%',
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'center'
    },
    buttonContainer : {
        width : '85%',
        height : '30%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center'
    },
    menuButton : {
        alignSelf:'center'
    },
    playButton : {
        alignSelf:'center'
    },
    middleButtons : {
        alignSelf:'center',
        width : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    image: {
        alignSelf : 'center',
        fontSize: '1.5rem',
        color : 'white'
    },
}

export default Ipod;