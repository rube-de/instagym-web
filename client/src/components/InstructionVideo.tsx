import React from "react";
import ReactPlayer from 'react-player'

export default class InstructionVideo extends React.Component{
    render(){
        return <ReactPlayer 
        url='https://www.youtube.com/watch?v=MVMNk0HiTMg' 
        width='100%'
        height='800px'
        controls={true}
        playing/>
    }
}