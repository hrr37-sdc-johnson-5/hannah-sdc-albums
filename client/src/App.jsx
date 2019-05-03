import React from 'react';
import RecommendedAlbums from './components/RecommendedAlbums.jsx';
import Tags from './components/Tags.jsx';


class RecommendedAlbumsApp extends React.Component {
  constructor(props) {
    super(props);
    const albumIdFromUrl = window.location.pathname.slice(1, window.location.pathname.length - 1);
    this.state = {
      albumResults: [],
      albumTags: null,
      artist: 'TestArtist',
      albumId: albumIdFromUrl
    };

    this.getRelatedAlbums = this.getRelatedAlbums.bind(this);
  }

  componentDidMount() {
    this.getRelatedAlbums();
  }

  getRelatedAlbums() {
    fetch(`http://localhost:3001/api/albums/${this.state.albumId}`)
      .then(response => response.json())
      .then(albumResults => this.setState({ albumResults }));
  }

  render() {
    const { artist, albumResults } = this.state;
    return (
      <div>
        {/* {ReactDOM.createPortal(
          <Tags tags={this.state.albumTags}/>,
          document.getElementById("tags")
        )} */}
        <div className="recommended-module">
          <div className="main-container">
            <p className="recommended-title">If you like {artist}, you may also like:</p>
            <div className="album-container">
              <RecommendedAlbums albums={albumResults} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedAlbumsApp;