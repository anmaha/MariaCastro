const React = require('react');
// css Style
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000'
};
const myStyle2 = {
    //text-transform: 'capitalize'
  
};

class Index extends React.Component {
    render() {
        const {pokemon} = this.props;
        return(
            <div><div>            
            <h1>See all the Pokemon!</h1>
            <ul style={myStyle}>
            {pokemon.map((pokemon) => {
                return(
                    <li>
                        <a style={myStyle2} href ={`/pokemon/${pokemon.name}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                        <img src ={`${pokemon.img}.jpg`} alt=''></img>
                    </li>
                )
            })}
            </ul>
            </div></div>
        )
    }

};

module.exports = Index;