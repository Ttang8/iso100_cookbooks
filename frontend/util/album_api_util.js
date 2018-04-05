export const requestAlbums = () => (
  $.ajax({
    method: 'GET',
    url: '/api/albums'
  })
);

export const updateAlbum = album => (
  $.ajax({
    method: 'PATCH',
    url: `/api/albums/${album.id}`,
    data: {album}
  })
);

export const requestAlbum = albumId => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${albumId}`
  })
);

export const destroyAlbum = (album) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/albums/${album.id}`,
  })
);

export const createAlbum = album => (
  $.ajax({
    method: 'POST',
    url: '/api/albums',
    data: album
  })
);
