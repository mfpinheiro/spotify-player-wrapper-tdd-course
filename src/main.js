import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracs from './AlbumTracks';

const albums = spotify.search.albums('Incubus');
// eslint-disable-next-line no-undef
const albumList = document.getElementById('album-list');
const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
// eslint-disable-next-line no-undef
const albumInfo = document.getElementById('album-info');
// eslint-disable-next-line no-undef
const albumTracks = document.getElementById('album-tracks');

albums.then(data => renderAlbums(data.albums.items, albumList));

album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracs(data.tracks.items, albumTracks));
