export const destroyComment = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`,
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: comment
  })
);
