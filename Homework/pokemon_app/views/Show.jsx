const React = require('react');
const { fileURLToPath } = require('url');

class Show extends React.Component {
    render() {
        const {pokemon} = this.props;
        console.log(pokemon)
        return( 
        <>
         <h1> Gotta Catch 'Em All </h1>
              <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} <img src ={`${pokemon.img}.jpg`} alt=''></img>    
             </h2>
             <nav>
                 <a href='/pokemon'>Show 'Em All Page</a>
             </nav>
      </>
         );
    }
}

module.exports = Show;