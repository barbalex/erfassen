---
path: "/Technische-Dokumentation/User-und-Projekte-verwalten"
date: "2018-10-01"
title: "User und Projekte verwalten"
---
## 1. user
### create
1. server-side:
   * on create user
   * create userDb
   * find projects with users email in projectDef.users and list them in userDb.projects
2. app-side:
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
   * name it userName_projectName (replace @ & . with $$ & $)
   * create new db and collections
   * create projectDef doc in db
   * add projectDef.users
   * add projectDef.billing
   * check billing validity?
   * copy projectDef doc to messageDb
2. server-side:
   * on new projectDef doc in messageDb
   * create new db, including security doc
   * add this user to admin members of project (ensure only members can access it)
   * loop projectDef.users
   * add users as admin members of project
   * add dbName to every user's userDb projects list
   * delete projectDef doc in messageDb
3. app-side:
   * on delete projectDef doc in messageDb
   * sync project's collections

5.    edit project
      server-side
5.1.1  on edit projectDef doc in project database
5.1.2 if one of projectDef.users was removed, remove project name from userDoc's project list
5.1.3 if one of projectDef.users was added, add project name in userDoc's project list

6.    delete project
      server-side
6.1.1 on delete projectDef doc in project, i.e. db
6.1.2 loop projectDef.users
6.1.3 remove project name from userDoc's project list
6.1.4 delete project db
      app-side
6.2.1 TODO: need to clear data from rxdb/pouch?