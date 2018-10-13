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
   * [create userDb](http://docs.couchdb.org/en/stable/config/couch-peruser.html) :white_check_mark:
   * add user to security doc's members (momentarily disabled because of [PouchDB](https://github.com/pouchdb/pouchdb/pull/7395) and [pouchdb-authentication](https://github.com/pouchdb-community/pouchdb-authentication/pull/238) issue)
   * create user doc in userDb :white_check_mark:
   * find projects with users email in `_security` members and list them in projects key in the user's doc (momentarily not going to work because of above mentioned issues) :ballot_box_with_check:
3. app-side:
   * create userDb :white_check_mark:
   * create userDoc collection :white_check_mark:
   * sync userDoc collection :construction:<br/>
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
   * delete userDb :white_check_mark:
   * delete user's projects :construction:
   * remove user from members of message db :construction:

## 2. project / db
### create
1. app-side:
   * user creates new project :white_medium_square:
   * names it :white_medium_square:
   * create projectDef doc in message db
2. server-side, on new projectDef doc in messageDb:
   * create new project db :white_medium_square:
   * name it `project_userName_projectName` (replace `@` with `_at_` and `.` with `_p_`) :white_medium_square:
   * add user to members in [security doc](http://docs.couchdb.org/en/latest/api/database/security.html) (ensure only members can access it) (do not do this momentarily due to PouchDB issue) :white_medium_square:
   * create projectDef doc in project db :white_medium_square:
   * delete projectDef doc in messageDb :white_medium_square:
3. app-side, on delete projectDef doc in messageDb:
   * sync project's collections :white_medium_square:
   * show user tools to edit project :white_medium_square:

### edit
#### edit project's user
1. app-side:
   * user can add users by email :white_medium_square:
   * add projectDef.users :white_medium_square:
   * add projectDef.billing :white_medium_square:
   * check billing validity? :white_medium_square:
2. server-side, on edit projectDef doc in project db :white_medium_square:
   * if one of projectDef.users was added:
      * add project name in userDoc's project list :white_medium_square:
      * add user as member to project db's security doc :white_medium_square:
   * if one of projectDef.users was removed:
      * remove project name from userDoc's project list :white_medium_square:
      * remove user from project db's members in security doc :white_medium_square:

#### edit project's tables
1. app-side:
   * user can add table :white_medium_square:
      * create new collection :white_medium_square:
   * user can remove table :white_medium_square:
      * delete collection :white_medium_square:
2. server-side:
   * no action needed

### delete
1. server-side
   * on delete projectDef doc in project, i.e. db :white_medium_square:
   * loop projectDef.users :white_medium_square:
   * remove project name from userDoc's project list :white_medium_square:
   * delete project db :white_medium_square:
2. app-side
   * TODO: need to clear data from rxdb/pouch?