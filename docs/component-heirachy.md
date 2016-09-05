## Component Hierarchy

**Bolded** components are associated with routes.

**App**
* Navbar
* TracksIndex
  * TracksIndexItem
* Profile
  *   Tabs
      * TracksIndex
      * PlaylistIndex
          * PlaylistIndexItem
* Search
* Upload



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/"         | "HomePage"         |
| "/users/:user_id" | "ProfileContainer" |
| "/playlist/:playlist_id/ | "PlaylistContainer"
| "/tracks/:track_id/" | "TrackContainer" |
| "/tracks/:track_id/edit" | "TrackEditContainer" (if owned by user)
| "/tracks/new" | "NewTrackFrom" | (Must Be Logged In)
| "/search" | "Search" |
| "/play_list/:playlist_id" | "PlaylistContainer" |
| "/playlist/:playlist_id/edit" | "PlaylistEditContainer" |
| "/playlist/new" | "NewPlaylistForm" |
| "/upload" | "UploadPath" |
