---
path: "/Technische-Dokumentation/User-und-Projekte-verwalten"
date: "2018-10-01"
title: "User und Projekte verwalten"
sort: 1
---

This document describes how creating, editing and deleting users and projects is managed.

Inspired by [PouchDB's docs](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/recipes.md#some-people-can-read-some-docs-some-people-can-write-those-same-docs).

## 1. user
### create
1. app-side
   * user clicks menu to create account
   * [pouchdb.signUp](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbsignupusername-password--options--callback) creates the user in CoudhDB's _users db
   * do not save username and password: PouchDB remains logged in as long as the cookie is valid
   * pop up login form as no valid cookie exists
   * log in
2. server-side:
   * on create user
   * [create userDb](http://docs.couchdb.org/en/stable/config/couch-peruser.html)
   * find projects with users email in projectDef.users and list them in projects key in the users doc in the _users db
3. app-side:
   * [pouchdb.getUser](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbgetuserusername--opts-callback)
   * create userDb
   * create userDoc collection
   * sync userDoc collection<br/>
      catch if Sync errors because db does not yet exist

### edit
1. app-side:
   * make sure billing info is valid

### delete
1. app-side
   * menu to remove account with all data
   * delete userDoc
2. server-side
   * on delete userDoc
   * remove user from projects
   * delete userDb

## 2. project / db
### create
1. app-side:
   * name it userName_projectName (replace @ & . with $$ & $) (hex encode user- and project name? https://stackoverflow.com/a/51624609)
   * create new db and collections
   * create projectDef doc in db
   * add projectDef.users
   * add projectDef.billing
   * check billing validity?
   * copy projectDef doc to messageDb
2. server-side:
   * on new projectDef doc in messageDb
   * create new db, including [security doc](http://docs.couchdb.org/en/latest/api/database/security.html)
   * add this user to admin members of project (ensure only members can access it)
   * loop projectDef.users
   * add users as admin members of project
   * add dbName to every user's userDb projects list
   * delete projectDef doc in messageDb
3. app-side:
   * on delete projectDef doc in messageDb
   * sync project's collections

### edit
1. server-side
   * on edit projectDef doc in project database
   * if one of projectDef.users was removed, remove project name from userDoc's project list
   * if one of projectDef.users was added, add project name in userDoc's project list

### delete
1. server-side
   * on delete projectDef doc in project, i.e. db
   * loop projectDef.users
   * remove project name from userDoc's project list
   * delete project db
2. app-side
   * TODO: need to clear data from rxdb/pouch?