import React from 'react';
import RecommendedAlbums from './components/RecommendedAlbums.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumResults: [],
      albumTags: null,
      artist: null
    }
    this.getRelatedAlbums = this.getRelatedAlbums.bind(this);
    this.getExampleAlbumInfo = this.getExampleAlbumInfo.bind(this);
  }

  componentDidMount() {
    this.getRelatedAlbums()
    this.getExampleAlbumInfo()
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

  getExampleAlbumInfo() {
    fetch(`/api/album/${this.props.album.id}`)
      .then(response => {
        return response.json();
      })
      .then(album => {
        this.setState({ artist: album.artist, albumTags: album.tags })
      })
  }

  render() {
    return (
      <div className="recommended-module">
        <div className="main-container">
          <p className="recommended-title">If you like {this.state.artist}, you may also like:</p>
          <div className="album-container"> <RecommendedAlbums albums={this.state.albumResults} /></div>
        </div>
      </div>
    )
  }
}



export default App