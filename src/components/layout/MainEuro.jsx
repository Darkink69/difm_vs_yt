import React from "react"
import { Cards } from "./Cards"
import {Preloader} from './Preloader'
import { Search } from "./Search"

class MainEuro extends React.Component {
    state = {
        cards: [],
        loading: true
    }

    searchText = (str, type='all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=b5926dd3&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
        .then(res => res.json())
        .then(data => this.setState({cards: data.Search, loading: false}))
    }

    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=b5926dd3&s=terminator')
        .then(res => res.json())
        .then(data => this.setState({cards: data.Search, loading: false}))
        .catch((err) => {
            console.error(err)
            this.setState({loading: true})
        })
    }

    render() {
        return <main className="container content">
            <Search searchText={this.searchText}/>
            {
                this.state.loading ? (
                    <Preloader/>
                ) : <Cards cards={this.state.cards}/>
            }
        </main>
    }

}

export {MainEuro}