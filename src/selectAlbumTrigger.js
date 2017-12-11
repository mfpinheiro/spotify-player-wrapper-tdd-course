import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracs from './AlbumTracks';

// eslint-disable-next-line no-undef
const listAlbums = document.getElementById('album-list');
// eslint-disable-next-line no-undef
const albumInfo = document.getElementById('album-info');
// eslint-disable-next-line no-undef
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumId) {
  spotify.album
    .getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracs(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', (e) => {
    const { target } = e;
    makeRequest(target.getAttribute('data-album-id'));
  });
}
