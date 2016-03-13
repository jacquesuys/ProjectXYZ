const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const methodOverride = require('method-override');
const config = require('./config');
const Util = require('./data-processor/util');
const ForkUtil = require('./models/forks');
const UserUtil = require('./models/users');
const FriendUtil = require('./models/friends');
const path = require('path');