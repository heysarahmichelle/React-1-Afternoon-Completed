import React, { Component } from 'react'

export default class FilterObject extends Component {
    constructor(){
        super();
            this.state={
                children: [{
                    name:'Sarah Michelle',
                    child: 3,
                    color: 'green'
                },
                {
                    name: 'Jessica',
                    child: 4,
                    color: 'teal',
                    hairColor: 'brown'
                },
                {
                    name: 'Gilbert',
                    child: 7,
                    color: 'smokey grey'
                }],
                userInput:'',
                filteredChildren: []
            }
        }
        handleChange(val){
            this.setState({userInput: val});
        }
        filterChildren(prop){
            let children=this.state.children;
            let filteredChildren=[];
            for(let i=0; i < children.length;i++){
                if(children[i].hasOwnProperty(prop)){
                    filteredChildren.push(filteredChildren[i]);
                }
            }
            this.setState({filteredChildren: filteredChildren});
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.children, null, 10)}</span>
                <input className="inputLine" onChange={ (e)=>this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={ ()=> this.filterChildren(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredChildren, null, 10)}</span>

            </div>
        )
    }
}
