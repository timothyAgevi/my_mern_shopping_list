import React ,{Component}  from 'react';
import { Container,ListGroup,ListGroupItem,Button}from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import { v1 as uuid} from 'uuid';

class ShoppingList extends Component{
    state = {
        items:[
            { id :uuid(),name:'Eggs'},
            { id :uuid(),name:'Milk'},
            { id :uuid(),name:'Steak'},
            { id :uuid(),name:'Water'}
        ]
    }

    render(){
        const {items }=this.state;
        return( 
            <container>
                <button
                color= "dark"
                style ={ { marginBottom: "2rem"}}
                onClick= {
                    ()=>{
                        const name = prompt('Enter Item');
                        if(name){
                            this.setState(state  =>({
                                items:[ ...state.items,{id : uuid(),name : name}]
                            }))
                        }
                    }
                }
                
                > Add Item</button>
            </container>
        )
    }
}
export default ShoppingList;