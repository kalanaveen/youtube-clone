import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" alt="youtube" />
                </Link>
            </div>
            <div className="header__middle">
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    type="text" placeholder="search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__searchIcon" />
                </Link>

            </div>
            <div className="header__mic">
                <MicIcon />
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__rightIcon" />
                <AppsIcon className="header__rightIcon" />
                <NotificationsIcon className="header__rightIcon" />
                <Avatar className="header__rightIcon"
                    src="https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
            </div>

        </div>
    )
}

export default Header
