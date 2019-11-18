import PropTypes from "prop-types"
import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Auth from "../Routes/Auth"
import Feed from "../Routes/Feed"
import Explore from "../Routes/Explore"
import Search from "../Routes/Search"
import Profile from "../Routes/Profile"
import Notification from "../Routes/Notification"

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed}></Route>
        <Route path="/explore" component={Explore} />
        <Route path="/search" component={Search} />
        <Route path="/notifications" component={Notification}/>
        <Route path="/:username" component={Profile} />
        <Redirect from="*" to='/' />
    </Switch>
)
const LoggedOutRoutes = () => <Switch><Route exact path="/" component={Auth}></Route></Switch>

const AppRouter = ({ isLoggedIn }) => (
    <Switch>{isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/>}</Switch>
)

AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default AppRouter