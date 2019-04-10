import React from 'react';
import RecommendedAlbums from './components/RecommendedAlbums.jsx';


class RecommendedAlbumsApp extends React.Component {
  constructor(props) {
    super(props);
    const albumIdFromUrl = window.location.pathname.slice(1, window.location.pathname.length - 1);
    this.state = {
      albumResults: [],
      albumTags: null,
      artist: null,
      albumId: albumIdFromUrl
    }
    this.getRelatedAlbums = this.getRelatedAlbums.bind(this);
    this.getExampleAlbumInfo = this.getExampleAlbumInfo.bind(this);
  }

  componentDidMount() {
    this.getRelatedAlbums()
    this.getExampleAlbumInfo()
  }

  getRelatedAlbums() {
    fetch(`http://localhost:3001/api/albums/${this.state.albumId}`)
      .then(response => {
        return response.json();
      })
      .then(albumResults => {
        this.setState({ albumResults });
      });
  }

  getExampleAlbumInfo() {
    fetch(`http://localhost:3001/api/album/${this.state.albumId}`)
      .then(response => {
        return response.json();
      })
      .then(album => {
        this.setState({ artist: album.artist, albumTags: album.tags })
      })
  }

  render() {
    return (
      <div>
        <div className="recommended-module">
          <div className="main-container">
            <p className="recommended-title">If you like {this.state.artist}, you may also like:</p>
            <div className="album-container"> <RecommendedAlbums albums={this.state.albumResults} /></div>
          </div>
        </div>
      </div>
    )
  }
}



export default RecommendedAlbumsApp;