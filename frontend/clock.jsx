import React from 'react';

export default class Clock extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    componentDidMount(){
        this.tickTime = setInterval(this.tick, 1000)
    }
    
    componentWillUnmount(){
        clearInterval(this.tickTime)
    }
    
    render (){
        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();
        return (
            <>
                <h1>Clock</h1>
                <div className="clock">
                    <h3><span>Time:</span><span>{hours}: {minutes}: {seconds}</span></h3>
                </div>
            </>
        )
        
    }
    
}

