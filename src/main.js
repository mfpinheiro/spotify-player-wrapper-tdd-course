import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracs from './AlbumTracks';
import searchEnterTrigger from './searchTrigger';

searchEnterTrigger();

const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
// eslint-disable-next-line no-undef
const albumInfo = document.getElementById('album-info');
// eslint-disable-next-line no-undef
const albumTracks = document.getElementById('album-tracks');

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracs(data.tracks.items, albumTracks));
