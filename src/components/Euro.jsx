import React from "react";

class Euro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tracks: [],
        loading: true,
        range: ''
      };
    }
  
    componentDidMount() {
      const url_euro = 'https://api.audioaddict.com/v1/di/track_history/channel/69.json'
      fetch(url_euro)
      .then(response => response.json())
      .then(data => this.setState({tracks: data, loading: false}))
  
      this.timerId = setInterval(() => {
        fetch(url_euro)
        .then(response => response.json())
        .then(data => this.setState({tracks: data}))
      }, 180000)
      
    }
   
    componentDidUpdate() {
      console.log(this.state.tracks[0].track)
    }
    
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    handleChangeRange = (event) => {
      this.setState({range: event.target.value})
    }

    clcId = (event) => {
        console.log('найди айди', event.target.id)
        // this.setState({posts: this.state.posts.filter(post => post.id !== id)})
      }
  
    render() {
      return (
        <div className="App">
          {this.state.loading ? <h1>Загрузка...</h1> : <div>
              {this.state.tracks.map((track) => (
                <div>
                  <h1 key={track.track_id} id={track.track_id} onClick={this.clcId}>{track.track}</h1>
                  <h1>00:00 {track.length}</h1>
                  <div>
                    <img style={{width: this.state.range + 'px'}} src={'https:' + track.art_url} alt=""/>
                    <br/>
                    <input 
                      type="range" 
                      min='20' max='300' 
                      defaultValue="50" 
                      name="range" 
                      onChange={this.handleChangeRange}
                      id={track.track_id} 
                    />
                  </div>
                </div>
                
              ))}
            </div>
          }
        </div>
      );
    }
  }
  
  export {Euro};