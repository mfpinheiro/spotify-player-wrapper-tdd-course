import spotify from './Spotify';
import renderAlbums from './AlbumList';

// eslint-disable-next-line no-undef
const albumList = document.getElementById('album-list');
// eslint-disable-next-line no-undef
const searchInput = document.getElementById('search-input');
// eslint-disable-next-line no-undef
const searchFrom = document.getElementById('search-form');

function makeRequest() {
  spotify.search
    .albums(searchInput.value)
    .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
  searchFrom.addEventListener('submit', e => {
    e.preventDefault();
    makeRequest();
  });
}
