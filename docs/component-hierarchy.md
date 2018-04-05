
## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**PhotosContainer**
 - PhotosHeader
  + PhotoIndex

**AlbumContainer**
 - AlbumHeader
  + PhotoIndex

**SearchResultsContainer**
 - Search
  + PhotoIndex

**TagContainer**
 - AlbumHeader
  + PhotoIndex

**PhotoIndex**
 - PhotoIndexItem
  + PhotoDetail
    + PhotoTools
    + AlbumSearch
    + Tags
      - Tag
    + Photo

**NewPhotoContainer**
 - NewPhoto
  - NewPhotoButton

**Search**

**NewAlbum**
 - NewAlbum

**NewTag**
 - NewTag

**AlbumSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/Photo/:PhotoId" | "PhotosContainer" |
| "/home/album/:albumId/photo/:photoId" | "AlbumContainer" |
| "/home/tag/:tagId/photo/:photodId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-photo" | "NewPhotoContainer" |
| "/search" | "Search" |
| "/new-album" | "NewAlbum" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/album-search" | "AlbumSearch" |
