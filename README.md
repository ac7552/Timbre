# Timbre


## Minimum Viable Product

Timbre is a web application inspired by SoundCloud that will be built using Ruby on Rails, and React/Redux. By the end of Week 9, this app will have the following set of features, as a minimum:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Song CRUD
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate CSS styling
  - [ ] Playback using Web Audio
- [ ] User comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Realtime 'playback' of comments based on where in song they were created
- [ ] User pages with profile information
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Continuous Playback

## Design Docs

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new Rails project
- [x] set up webpack & Redux scaffold with skeleton files
- [x] create `User` model
- [x] authentication backend setup
- [x] setup `APIUtil` to interact with the API
- [x] create `StaticPages` controller and root view
- [ ] set up Redux cycle for frontend auth
- [ ] user signup/signin components
- [ ] blank landing component after signin
- [ ] style signin/signup components
- [ ] seed users
- [ ] set up Heroku
### Phase 2: Profiles (1 day)

**Objective:** Users can create CRU profiles

- build out API and components for:
  - [ ] creating a profile
  - [ ] profiles are only editable by owner
  - [ ] Seed profiles

### Phase 2: Tracks Model, API, and CRUD components (2 days)

**Objective:** Tracks can be created, read (played), edited and destroyed through the API. Users can start or stop the song by clicking a play/pause button

- [ ] create `Track` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for tracks (`TracksController`)
- [ ] test out API interaction in the console.
- [ ] jBuilder views for tracks
- implement each track component
  - [ ] `TracksIndex`
  - [ ] `TrackIndexItem (minus playback)`
  - [ ] `TrackForm`
- [ ] save tracks to the DB when the form loses focus or is left idle after editing.
- [ ] style tracks components
- [ ] seed tracks
- [ ] Add playback/pause button to TrackIndexItem
- [ ] Integrate Web Audio functionality to start and stop a track
- Build out state of the TrackIndexItem using Web Audio analyzer so that
- [ ] it knows the current position of playback
- [ ] it knows whether its track is currently playing or not
- [ ] it can (optionally) keep track of elapsed time of the track using setTimeout
(supposedly it is non-trivial to fetch elapsed time from Web Audio)
- [ ] given these, all tracks can be in multiple states of play status and position at the same time   
- [ ] displaying a user's tracks


### Phase 3: Continuous Playback (1 Day)

**Objective:** a currentTrack component allows users to navigate around site while track plays and control playback

- [ ] Create currentTrack footer component
   - [ ] keeping track of the currently played song, regardless of navigation
   - [ ] the current tracker updates only when a new play button, outside of the
         current track footer, has been pressed
   - [ ] `Next` button resets currentTrack to whatever is next on the trackIndex's
          track list
- [ ] Use progress bar from previous phase to visualize track's progress
- [ ] Add volume control to currentTrack component and control using a gain node in
      Web Audio
- [ ] Test current track by navigating around site and trying to break it. Make
      sure it works smoothly and without stutters
- [ ] Style currentTrack footer component


### Phase 4: Comments (2 days)

**Objective:** Comments belong to tracks and to users. As a bonus, they are played at a particular position in the song

- [ ] create `Comment` model
- build out API and components for:
  - [ ] Comment CRUD
     - [ ] Add comment input to TrackIndexItem
  - [ ] Adding comments requires the user to have started listening to track
        - A simple implementation will add a comment input when the play/pause
          button or track visualizer has been engaged. More complex could keep
          track of plays by a particular user
  - [ ] Allow all of a songs comments to be viewed on TrackIndexItem
- [ ] Use CSS to style new components
- [ ] Seed Comments
- [ ] BONUS: tracks are `played` in the order in which they were created, one at a time




### Bonus Features (TBD)
- [ ] Add Likes
- [ ] Add Messaging
- [ ] Add Waveforms
- [ ] Add Follow
