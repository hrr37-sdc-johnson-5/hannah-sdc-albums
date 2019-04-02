import React from 'react';
import ReactDOM from 'react-dom';
import { mockAlbumResults } from './mockData.js'
import RecommendedAlbums from './components/RecommendedAlbums.jsx';
import { exampleAlbum } from './mockData.js';
import '../dist/main.css';
const id = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumResults: []
    }
    this.getRelatedAlbums = this.getRelatedAlbums.bind(this);
  }

  componentDidMount() {
    this.getRelatedAlbums()
  }

  getRelatedAlbums() {
    fetch(`/api/albums/${this.props.albumID}`)
      .then(response => {
        return response.json();
      })
      .then(albumResults => {
        this.setState({ albumResults });
      });
  }

  render() {
    console.log(this.state.albumResults)
    return (
      <div>
        <span>If you like {exampleAlbum.artist}, you may also like:</span>
        <div className="album-container"> <RecommendedAlbums albums={this.state.albumResults} example={exampleAlbum} /></div>
      </div>
    )
  }
}

ReactDOM.render(<App albumID={id}/>, document.getElementById('root'));