import React from 'react';
import './Header.css';
import iconFacebook from '../../assets/iconFacebook.png';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

export default class Header extends React.Component {
  render () {
    return (
      //BEM convetion
      <div className="header">
        <div className="header-left">
          <img src={iconFacebook} alt="logo" />
          <div className="header-input">
            <SearchIcon />
            <input
              className="header-input-text"
              type="text"
              placeholder="Search facebook"
            />
          </div>
        </div>
        <div className="header-middle">
          <div className="header-options">
            <HomeIcon fontSize="large"/>
          </div>
          <div className="header-options">
            <FlagIcon fontSize="large"/>
          </div>
          <div className="header-options">
            <SubscriptionsOutlinedIcon fontSize="large"/>
          </div>
          <div className="header-options">
            <StorefrontOutlinedIcon fontSize="large"/>
          </div>
          <div className="header-options">
            <SupervisedUserCircleIcon fontSize="large"/>
          </div>
        </div>
        <div className="header-right">
          <div className="header-info">
            <Avatar />
            <h4>Username</h4>
            <IconButton>
              <AddIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
              <ArrowDropDownOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}
