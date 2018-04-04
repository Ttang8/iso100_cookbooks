# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Photos

- `GET /api/photos`
  - Photos index/search
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`
  - index of all photos for a album

### Comments

- `GET /api/comments`
- `POST /api/comments`
- `GET /api/comments/:id`
- `DELETE /api/comments/:id`
- `GET /api/photos/:id/comments`

### Tags

- `GET /api/tags`
- `POST /api/photos/:photo_id/tags`
- `DELETE /api/photos/:photo_id/tags/:tag_name`
