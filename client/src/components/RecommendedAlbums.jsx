import React from 'react';


class RecommendedAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeAlbum: null,
      isHovered: false
    }
    this.enterHandler = this.enterHandler.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
  }

  enterHandler(albumID) {
    this.setState({activeAlbum: albumID, isHovered: true});
  }

  leaveHandler() {
    this.setState({ activeAlbum: null, isHovered: false })
  }

  render() {
    const hoverClass = this.state.isHovered ? "not-hovered-on" : "";
    return (
      this.props.albums.map((album => {
        return  <div key={album.id} className="album-square" onMouseEnter={() => this.enterHandler(album.id)} onMouseLeave={this.leaveHandler}>
        <img className={`album-art ${hoverClass}`} id={this.state.isHovered && this.state.activeAlbum === album.id ? "hovered-on" : ""} src={album.albumArt} />
          <div className="rec-album-info">
            <span className="release-title">{album.albumName}</span>
            <p>by {album.artist}</p>
          </div>
          { this.state.activeAlbum === album.id ? <div className="album-description">{album.description}</div> : null }
        </div>

      })
      )
    )
  }
}

export default RecommendedAlbums;