---
typ: 'technDoku'
path: "/Technische-Dokumentation/Login"
date: "2018-10-01"
title: "Login"
sort: 4
---

This document describes what happens on login app-side.<br/><br/>

Based on [PouchDB's plugin](https://github.com/pouchdb-community/pouchdb-authentication).<br/><br/>

Symbols:
* :white_check_mark:: done
* :ballot_box_with_check:: written but untested
* :white_medium_square:: todo<br/><br/>

app-side actions:
1. as long as cookie is valid, need not log in<br/>
   else: [pouchdb.logIn](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbloginusername-password--options--callback) :white_check_mark:
2. create userDoc collection :white_check_mark:
3. sync userDoc collection :white_check_mark:
4. extract project list from userDoc :white_medium_square:
5. loop projects
6. create projectDef collections :white_medium_square:
7. sync projectDef collections :white_medium_square:
8. if one existing projectDef collection is no more in the project list:<br/>
   remove it and it's table collections :white_medium_square:
9. extract table lists from projectDefs :white_medium_square:
10. loop tables
11. create table collections :white_medium_square:
12. sync table collections :white_medium_square:
13. if an existing table is no more in the tables list:<br/>
    remove it's collection :white_medium_square:


