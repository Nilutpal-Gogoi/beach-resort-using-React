import React, { Component } from 'react';
import items from "./data"

const RoomContext = React.createContext();
// <RoomContext.Provider value = {'hello'}

class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms:[],
        featuredRooms:[],
        loading: true
    };
    // getData

    componentDidMount(){
        // this.getData
        let rooms = this.formatData(items)  //Here the items is from the data.js folder 
        let featuredRooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms, 
            sortedRooms:rooms, 
            loading:false
        });
    }

    formatData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id
            let images = item.fields.images.map(image =>image.fields.file.url)
            // To access all the properties that are within each and every item fields property we use  ...
            let room = {...item.fields, images, id}
            return room;
        });
        return tempItems;
    }

    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
                {this.props.children}                
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext};