import React from 'react';
import RecommendedAlbums from './components/RecommendedAlbums.jsx';
import { exampleAlbum } from './mockData.js';



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
    fetch(`/api/albums/${this.props.album.id}`)
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
        <span>If you like {this.props.album.artist}, you may also like:</span>
        <div className="album-container"> <RecommendedAlbums albums={this.state.albumResults} example={exampleAlbum} /></div>
      </div>
    )
  }
}



export default App