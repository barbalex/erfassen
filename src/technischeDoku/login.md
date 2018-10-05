---
typ: 'technDoku'
path: "/Technische-Dokumentation/Login"
date: "2018-10-01"
title: "Login"
sort: 4
---

This document describes what happens on login app-side.<br/><br/>

Based on [PouchDB's plugin](https://github.com/pouchdb-community/pouchdb-authentication).<br/><br/>

1. as long as cookie is valid, need not log in<br/>
   else: [pouchdb.logIn](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbloginusername-password--options--callback)
2. create userDoc collection
3. sync userDoc collection
4. extract project list from userDoc
5. loop projects
6. create projectDef collections
7. sync projectDef collections
8. if one existing projectDef collection is no more in the project list:<br/>
   remove it and it's table collections
9. extract table lists from projectDefs
10. loop tables
11. create table collections
12. sync table collections
13. if an existing table is no more in the tables list:<br/>
    remove it's collection


