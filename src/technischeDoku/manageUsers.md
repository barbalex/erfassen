---
typ: 'technDoku'
path: "/Technische-Dokumentation/Manage-users"
date: "2018-10-01"
title: "Manage users"
sort: 3
---

This document describes how creating, editing and deleting users is managed.<br/>
It's rather cryptic and probably most useful for myself.<br/><br/>

Symbols:
* :white_check_mark:: done
* :ballot_box_with_check:: written but untested
* :white_medium_square:: todo

## create
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
   * [log in](/Technische-Dokumentation/Login) :white_check_mark:

## edit
1. app-side:
   * make sure billing info is valid :white_medium_square:

## delete
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
