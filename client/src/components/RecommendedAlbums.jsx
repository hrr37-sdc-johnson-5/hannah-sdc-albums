import React from 'react';


class RecommendedAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAlbum: null,
      isHovered: false,
    }
    this.enterHandler = this.enterHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  enterHandler(albumID) {
    this.setState({ activeAlbum: albumID, isHovered: true });
  }

  leaveHandler() {
    this.setState({ activeAlbum: null, isHovered: false });
  }

  render() {
    const { isHovered, activeAlbum } = this.state;
    const { albums } = this.props;

    const hoverClass = isHovered ? 'not-hovered-on' : '';
    return (
      albums.map(((album) => {
        const activeAlbumClass = isHovered && activeAlbum === album.id ? 'hovered-on' : '';
        return <div key={album.id} className={`album-square ${hoverClass} ${activeAlbumClass}`} onMouseEnter={() => this.enterHandler(album.id)} onMouseLeave={this.leaveHandler} >
          <img className="album-art" src={album.albumArt} />
          <div className="rec-album-info">
            <span className="release-title">{album.albumName}</span>
            <p className="release-artist">by {album.artist}</p>
          </div>
          {activeAlbum === album.id ? (
          <div>
            <div className="album-description">{album.description}</div>
            <br></br>
            <a className="album-link" href="#">go to album</a></div>) : null}
        </div>
      }))
    );
  }
}

export default RecommendedAlbums;
