---
path: "/Technische-Dokumentation/Login"
date: "2018-10-01"
title: "Login"
sort: 2
---

This document describes what happens on login app-side.<br/><br/>

Based on [PouchDB's plugin](https://github.com/pouchdb-community/pouchdb-authentication).<br/><br/>

1. if cookie is still valid, need not log in
2. else: [pouchdb.logIn](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbloginusername-password--options--callback)
2. create userDoc collection
3. sync userDoc collection
4. extract project list from userDoc
5. loop projects
6. create projectDef collections
7. sync projectDef collections
8. extract table lists from projectDefs
9. loop tables
10. create table collections
11. sync table collections


