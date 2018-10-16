---
typ: 'technDoku'
path: "/Technische-Dokumentation/Manage-projects"
date: "2018-10-01"
title: "Manage projects"
sort: 4
---

This document describes how creating, editing and deleting projects is managed.<br/>
It's rather cryptic and probably most useful for myself.<br/><br/>

Inspired by [PouchDB's docs](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/recipes.md#some-people-can-read-some-docs-some-people-can-write-those-same-docs).<br/><br/>

Symbols:
* :white_check_mark:: done
* :ballot_box_with_check:: written but untested
* :white_medium_square:: todo

## create
1. app-side:
   * Tree includes node "Projekte: eigene" (besides "Projekte: mitarbeit") :white_medium_square:
      * top node is empty text-input that creates new project when user inputs name :white_medium_square:
   * user names new project :white_check_mark:
   * user confirms the new name :white_check_mark:
   * app creates projectDef doc in message db :white_check_mark:
2. server-side, on new projectDef doc in messageDb:
   * create new project db :white_check_mark:
   * name it `project_userName_projectName` (replace `@` with `_at_` and `.` with `_p_`) :white_check_mark:
   * add user to members in [security doc](http://docs.couchdb.org/en/latest/api/database/security.html) (ensure only members can access it) (do not do this momentarily due to PouchDB issue) :white_medium_square:
   * create projectDef doc in project db :white_medium_square:
   * delete projectDef doc in messageDb :white_medium_square:
3. app-side, on delete projectDef doc in messageDb:
   * sync project's collections :white_medium_square:
   * show user tools to edit project :white_medium_square:

## edit
#### edit project's user
1. app-side:
   * user can add users by email :white_medium_square:
   * app adds user to projectDef.users :white_medium_square:
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
      * app creates new collection :white_medium_square:
   * user can remove table :white_medium_square:
      * app deletes collection :white_medium_square:
2. server-side:
   * no action needed

#### edit other project values
1. app-side:
   * add projectDef.billing :white_medium_square:
   * check billing validity? :white_medium_square:
2. server-side:
   * no action needed

## delete
1. server-side
   * on delete projectDef doc in project, i.e. db :white_medium_square:
   * loop projectDef.users :white_medium_square:
   * remove project name from userDoc's project list :white_medium_square:
   * delete project db :white_medium_square:
2. app-side
   * TODO: need to clear data from rxdb/pouch?