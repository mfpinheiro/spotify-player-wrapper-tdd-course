import { expect } from 'chai';
import spotify from '../src/Spotify';

describe('Spotify Wrapper', () => {
  it('should be a onbject', () => {
    expect(spotify).to.be.a('object');
  });

  it('should have search methods', () => {
    expect(spotify.search).to.exist;
  });

  it('should have album methods', () => {
    expect(spotify.album).to.exist;
  });
});
