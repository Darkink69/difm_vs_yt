import { Card } from "./Card"

function Cards(props) {
    const {cards=[]} = props;
    return <div className="cards">
        {cards.length ? cards.map(card => (
            <Card key={card.imdbID} {...card}/>
        )) : <h4>Nothing...</h4>
    }
    </div>
}

export {Cards}