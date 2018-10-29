---
typ: 'technDoku'
path: "/Technische-Dokumentation/Login"
date: "2018-10-01"
title: "Log in"
sort: 5
---

This document describes what happens on login app-side.<br/><br/>

Based on [PouchDB's plugin](https://github.com/pouchdb-community/pouchdb-authentication).<br/><br/>

Symbols:
* :white_check_mark:: done
* :ballot_box_with_check:: written but untested
* :white_medium_square:: todo<br/><br/>

app-side actions:
1. [log out](/Technische-Dokumentation/Logout) :white_check_mark:
2. [pouchdb.logIn](https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/api.md#dbloginusername-password--options--callback) :white_check_mark:
3. create userDoc collection :white_check_mark:
4. sync userDoc collection :white_check_mark:
5. extract project list from userDoc :white_check_mark:
6. loop projects
7. create projectDef collections :white_check_mark:
8. sync projectDef collections :ballot_box_with_check:
9. if one existing projectDef collection is no more in the project list:<br/>
   remove it and it's table collections :white_medium_square:
10. extract table lists from projectDefs :white_medium_square:
11. loop tables
12. create table collections :white_medium_square:
13. sync table collections :white_medium_square:
14. if an existing table is no more in the tables list:<br/>
    remove it's collection :white_medium_square:


