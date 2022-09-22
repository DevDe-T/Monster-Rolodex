import {Component} from 'react';
import './card-list.styles.css';
import Card from '../Card/card.component';

class CardList extends Component{
    render(){
        const {monsters} = this.props;
        // console.log('render FROM CARD');

        return (
            <div className = 'card-list'>
                {monsters.map((monster) => {
            
                return (
                   <Card monster={monster} />
                )
                }
                )}
            </div>
        );
    }
}

export default CardList;