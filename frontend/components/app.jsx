import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import NavBarContainer from './nav/navbar_container';
import FootBar from './footer_bar/footer_bar';
import PhotoDetailViewContainer from './photo/photo_detail_view_container';
import UserPageContainer from './user_page/user_page_container';
import PhotoUploadFormContainer from './photo/photo_upload_form_container';
import SearchTagIndexContainer from './search_tag/search_tag_index_container';


const App = () => (
  <div>
    <div className="navbar">
    <NavBarContainer />
    </div>

    <Route exact path="/" component={HomeContainer} />
    <ProtectedRoute path="/photos/:photoId" component={PhotoDetailViewContainer} />
    <ProtectedRoute path="/photo-upload/:userId/" component={PhotoUploadFormContainer} />
    <ProtectedRoute path="/userpage/:userId" component={UserPageContainer} />
    <ProtectedRoute path="/search/:tagId" component={SearchTagIndexContainer} />

    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
    <FootBar />
  </div>
);

export default App;
