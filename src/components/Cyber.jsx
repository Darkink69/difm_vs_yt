export function Cyber(props) {
    // props.songs.map(song => console.log(song))
    // console.log(props.songs[0].song)
    return <div>
        <h3 onClick={props.cbr}>Cyber Space</h3>
        <p onWheel={props.cbr}>Тут будет - {
            props.songs[0].song
            // props.songs.map(song => props.song)
        }
        </p>
    </div>
}