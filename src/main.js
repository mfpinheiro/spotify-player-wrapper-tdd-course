import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracs from './AlbumTracks';

const albums = spotify.search.albums('Incubus');
// eslint-disable-next-line no-undef
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6peEdPVO73WtgGah5sEhX4');
// eslint-disable-next-line no-undef
const albumInfo = document.getElementById('album-info');


// const tracks = spotify.album.getAlbumTracks('');


albums.then(data => renderAlbums(data.albums.items, albumList));

album.then(data => renderAlbumInfo(data, albumInfo))

