export function Post (props) {
    const {id, clc, name} = props;
    return <h1 onClick={() => clc(id)}>{name}</h1>
}