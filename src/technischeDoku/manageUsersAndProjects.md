---
path: "/Technische-Dokumentation/User-und-Projekte-verwalten"
date: "2018-10-01"
title: "User und Projekte verwalten"
---

1. create user
   1. server-side:
       1. on create user
       2. create userDb
       3. find projects with users email in projectDef.users and list them in userDb.projects
   2. app-side:
       1. create userDb
       2. create userDoc collection
       3. sync userDoc collection<br/>
          catch if Sync errors because db does not yet exist
2. edit user
   1. app-side:
       1. make sure billing info is valid

3. delete user
   1. app-side
       1. menu to remove account with all data
       2. delete userDoc
   2. server-side
       1. on delete userDoc
       2. remove user from projects
       3. delete userDb

4.    create project / db
      app-side:
4.1.1 name it userName_projectName (replace @ & . with $$ & $)
4.1.2 create new db and collections
4.1.3 create projectDef doc in db
4.1.4 add projectDef.users
4.1.5 add projectDef.billing
4.1.6 check billing validity?
4.1.7 copy projectDef doc to messageDb
      server-side:
4.2.1 on new projectDef doc in messageDb
4.2.2 create new db, including security doc
4.2.3 add this user to admin members of project (ensure only members can access it)
4.2.4 loop projectDef.users
4.2.5 add users as admin members of project
4.2.6 add dbName to every user's userDb projects list
4.2.7 delete projectDef doc in messageDb
      app-side:
4.3.1 on delete projectDef doc in messageDb
4.3.2 sync project's collections

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