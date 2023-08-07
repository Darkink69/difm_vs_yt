import React from 'react';
import './App.css';
// import {Posts} from './components/Posts'
// import Timer from './components/Timer';
// import {Cyber} from './components/Cyber'
// import {Form} from './components/Form'
// import {Form2} from './components/Form2'
// import {Euro} from './components/Euro'
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MainEuro } from './components/layout/MainEuro';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 'abc1', name: 'Something one!'},
        {id: 'abc2', name: 'Again two!'},
        {id: 'abc3', name: 'More.. three..'}
      ],
      songs: [
        {song: 'Space!!'},
        {song: 'Супер песня!'}
      ]
    };
  }

  clcSomething = (id) => {
    console.log('КЛик! Ну что с того?')
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }

  clcCyber = () => {
    console.log('Это Кибер Спейс!')
    // const song = 'Space!!'
  }

  componentDidMount() {
    
  }
 
  componentDidUpdate() {
    // console.log(this.state.tracks[0].track)
  }
  
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {

    // const {posts} = this.state;

    return (
      <div className="App">
        <Header/>
        {/* <Form2/> */}
        {/* <Form email={'wowq@rtyrt.ru'} /> */}
        {/* <Cyber cbr={this.clcCyber} songs={this.state.songs}/> */}
        {/* <Posts posts={posts} clc={this.clcSomething}/> */}
        {/* <Euro/> */}
        <MainEuro/>
        <Footer/>
        {/* <Timer/>  */}
      </div>
    );
  }
}

export default App;

