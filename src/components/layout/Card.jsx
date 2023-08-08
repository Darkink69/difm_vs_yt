function Card(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props

    return <div>
          <div>
            <div class="col s12 m7">
            <div class="card">
                <div class="card-image">
                <img src={Poster} alt=""/>
                </div>
                <div class="card-content">
                <h4 class="card-title">{Title}</h4>
                <p>{Year} {Type}</p>
                </div>
                <div class="card-action">
                <a href={'https://www.imdb.com/title/'+imdbID} target="blank">imdbID.com</a>
                </div>
            </div>
            </div>
        </div>
    </div>
}

export {Card}