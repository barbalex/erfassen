---
typ: 'technDoku'
path: "/Technische-Dokumentation/User-und-Projekte-verwalten"
date: "2018-10-01"
title: "User und Projekte verwalten"
sort: 3
---

This document describes how creating, editing and deleting users and projects is managed.<br/>
It's rather cryptic and probably most useful for myself.<br/><br/>

Inspired by [PouchDB's docs](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/recipes.md#some-people-can-read-some-docs-some-people-can-write-those-same-docs).<br/><br/>

Symbols:
* :white_check_mark:: done
* :ballot_box_with_check:: written but untested
* :white_medium_square:: todo

## 1. user
### create
1. app-side
   * user clicks menu to create account :white_check_mark:
   * [pouchdb.signUp](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbsignupusername-password--options--callback) creates the user in CoudhDB's `_users` db :white_check_mark:
   * do not save username and password: PouchDB remains logged in as long as the cookie is valid :white_check_mark:
   * pop up login form as no valid cookie exists :white_check_mark:
   * log in :white_check_mark:
2. server-side:
   * [create userDb](http://docs.couchdb.org/en/stable/config/couch-peruser.html) :ballot_box_with_check:
   * create user doc in userDb :ballot_box_with_check:
   * find projects with users email in `_security` members and list them in projects key in the user's doc :ballot_box_with_check:
3. app-side:
   * [pouchdb.getUser](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbgetuserusername--opts-callback)
   * create userDb :white_medium_square:
   * create userDoc collection :white_medium_square:
   * sync userDoc collection :white_medium_square:<br/>
      catch if Sync errors because db does not yet exist

### edit
1. app-side:
   * make sure billing info is valid :white_medium_square:

### delete
1. app-side
   * menu to remove account with all data :white_medium_square:
   * tell user what is going to be deleted, foremost: what projects :white_medium_square:
   * let user confirm firmly by typing his email in to text field :white_medium_square:
   * delete userDoc :white_medium_square:
2. server-side
   * remove user from projects :construction:
   * delete userDb :construction:
   * delete user's projects :construction:
   * remove user from members of message db :construction:

## 2. project / db
### create
1. app-side:
   * user creates new project :white_medium_square:
   * gives it a name :white_medium_square:
   * can add users by email :white_medium_square:
   * name it `project_userName_projectName` (replace `@` with `_at_` and `.` with `_p_`) :white_medium_square:
   * create new db and collections :white_medium_square:
   * create projectDef doc in it's collection :white_medium_square:
   * add projectDef.users :white_medium_square:
   * add projectDef.billing :white_medium_square:
   * check billing validity? :white_medium_square:
   * copy projectDef doc to messageDb :white_medium_square:
2. server-side:
   * on new projectDef doc in messageDb :white_medium_square:
   * create new project db, including [security doc](http://docs.couchdb.org/en/latest/api/database/security.html) :white_medium_square:
   * add this user to admin members of project db (ensure only members can access it) :white_medium_square:
   * loop projectDef.users :white_medium_square:
   * add users as admin members to project db :white_medium_square:
   * add dbName to every user's userDb projects list :white_medium_square:
   * delete projectDef doc in messageDb :white_medium_square:
3. app-side:
   * on delete projectDef doc in messageDb :white_medium_square:
   * sync project's collections :white_medium_square:

### edit
1. server-side
   * on edit projectDef doc in project db :white_medium_square:
   * if one of projectDef.users was removed, remove project name from userDoc's project list :white_medium_square:
   * if one of projectDef.users was added, add project name in userDoc's project list :white_medium_square:

### delete
1. server-side
   * on delete projectDef doc in project, i.e. db :white_medium_square:
   * loop projectDef.users :white_medium_square:
   * remove project name from userDoc's project list :white_medium_square:
   * delete project db :white_medium_square:
2. app-side
   * TODO: need to clear data from rxdb/pouch?