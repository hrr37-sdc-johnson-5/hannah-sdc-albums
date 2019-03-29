import React from 'react';
import ReactDOM from 'react-dom';
import {mockAlbumResults} from './mockData.js'
import RecommendedAlbums from './components/RecommendedAlbums.jsx';
import {exampleAlbum} from './mockData.js';
import '../dist/main.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumResults: []
    }
  }

  componentDidMount() {
    //mock get request
    setTimeout(() => {
      this.setState({albumResults: mockAlbumResults});
    }, 1000);
  }



  render() {
    console.log(this.state.albumResults)
    return (
      <div>
        <span>If you like {exampleAlbum.artist}, you may also like:</span>
        <div  className="album-container"> <RecommendedAlbums albums={this.state.albumResults} example={exampleAlbum} /></div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));