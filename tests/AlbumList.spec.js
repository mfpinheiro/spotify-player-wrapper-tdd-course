import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbums from '../src/AlbumList';

describe('AlbumList', () => {
  it('should exist renderAlbums method', () => {
    expect(renderAlbums).to.exist;
  });

  const oneAlbum = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Incubus',
        },
      ],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
          width: 64,
        },
      ],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const multipleAlbums = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Incubus',
        },
      ],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
          width: 64,
        },
      ],
      name: 'The Essential Incubus',
      type: 'album',
    },
    {
      album_type: 'album',
      artists: [
        {
          name: 'Incubus',
        },
      ],
      id: '6peEdPVO73WtgGah5sEhX4',
      images: [
        {
          height: 640,
          url:
            'https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757',
          width: 640,
        },
        {
          height: 300,
          url:
            'https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6',
          width: 300,
        },
        {
          height: 64,
          url:
            'https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16',
          width: 64,
        },
      ],
      name: 'The Essential Incubus',
      type: 'album',
    },
  ];

  const singleListItemMarkup = `
    <div class="list-item">
      <img src="${oneAlbum[0].images[2].url}" alt="${
    oneAlbum[0].name
  }" class="list-image">
      <div class="list-description">
        <p class="list-title">${oneAlbum[0].name}</p>
        <p class="list-subtitle">${oneAlbum[0].artists[0].name}</p>
      </div>
    </div>`;

  const multipleListItemMarkup = `
    <div class="list-item">
      <img src="${multipleAlbums[0].images[2].url}" alt="${
    multipleAlbums[0].name
  }" class="list-image">
      <div class="list-description">
        <p class="list-title">${multipleAlbums[0].name}</p>
        <p class="list-subtitle">${multipleAlbums[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item">
      <img src="${multipleAlbums[0].images[2].url}" alt="${
    multipleAlbums[0].name
  }" class="list-image">
      <div class="list-description">
        <p class="list-title">${multipleAlbums[0].name}</p>
        <p class="list-subtitle">${multipleAlbums[0].artists[0].name}</p>
      </div>
    </div>`;

  it('should create and append the singleListItemMarkup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(oneAlbum, element);

    expect(element.innerHTML).to.be.eql(singleListItemMarkup);
  });

  it('should create and append when has more then one album', () => {
    const element = document.createElement('div');
    renderAlbums(multipleAlbums, element);

    expect(element.innerHTML).to.be.eql(multipleListItemMarkup);
  });
});
