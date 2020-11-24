import React from 'react'

export default class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: 0,
            content: " "
        }
        this.selectTab = this.selectTab.bind(this);
        this.selectedContent = this.selectedContent.bind(this);
    }

    selectTab(idx) {//call selectedContent to update this.state.content
        this.setState({
            selected: idx
        });
        this.selectedContent();
    }

    selectedContent(){ //use this.setState
        let content;
        if(this.state.selected === 0){
            content =  'i am the first'
        } else if (this.state.selected === 1){
            content = 'second pane'
        } else {
            content = 'third pane'
        }
        this.setState({
            content: content
        })
    }
    componentDidMount(){
        this.selectTab(0);
    }
    render (){
        
        return (
            <>
                <h1>Tabs</h1>
                <div className="tabs">
                    <div className="btn-div">
                        <button onClick={()=> this.selectTab(0)}>One</button>
                        <button onClick={()=> this.selectTab(1)}>Two</button>
                        <button onClick={()=> this.selectTab(2)}>Three</button>
                    </div>
                    <h1>{this.state.content}</h1>
                </div>
            </>
        )
    }

}



