import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

describe('Album Tracks', () => {
  const oneTrackMarkup = `
      <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4">
        <p class="music-number">1</p>
        <p class="music-title">Version</p>
        <p class="music-duration">214946</p>
      </div>`;

  const oneTrackData = [
    {
      preview_url:
        'https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Version',
      duration_ms: 214946,
    },
  ];

  const multTrackData = [
    {
      preview_url:
        'https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Version',
      duration_ms: 214946,
    },
    {
      preview_url:
        'https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Version',
      duration_ms: 214946,
    },
  ];

  const multTrackMarkup = `
      <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4">
        <p class="music-number">1</p>
        <p class="music-title">Version</p>
        <p class="music-duration">214946</p>
      </div>
      <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/c1949d93cb9ea4970da80f827ea6e9f4c33ebc4a?cid=8897482848704f2a8f8d7c79726a70d4">
        <p class="music-number">1</p>
        <p class="music-title">Version</p>
        <p class="music-duration">214946</p>
      </div>`;

  it('should create and append the markup given the correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(oneTrackData, element);
    expect(element.innerHTML).to.be.eql(oneTrackMarkup);
  });

  it('should create and append the more then one item was passed to markup and given the correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(multTrackData, element);
    expect(element.innerHTML).to.be.eql(multTrackMarkup);
  });
});
