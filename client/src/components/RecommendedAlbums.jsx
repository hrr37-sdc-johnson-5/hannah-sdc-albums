import React from 'react';
import '../../dist/main.css';

class RecommendedAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAlbum: null
    }
    this.enterHandler = this.enterHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  enterHandler(albumID) {
    this.setState({activeAlbum: albumID})
  }

  leaveHandler() {
    this.setState({ activeAlbum: null })
  }

  render() {
    return (
      this.props.albums.map((album => {
        return <div key={album.id} className="album-square" onMouseEnter={() => this.enterHandler(album.id)} onMouseLeave={this.leaveHandler}> <img className="album-art" src={album.albumArt} />
          <span>{album.albumName}</span>
          <p>by {album.artist}</p>
          { this.state.activeAlbum === album.id ? <div>{album.description}</div> : null }
        </div>

      })
      )
    )
  }
}

export default RecommendedAlbums