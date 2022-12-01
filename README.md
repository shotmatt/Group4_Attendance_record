# Attendance Registration Web Application
By:
* Steve Redmile
* Matthew Turner
* Daniyal Syed
* Rui Sun
* Jinsong Zhang

The following commands need to run in order.

* Run the MongoDBserver: 
 * cd to ...\mongodbServer\bin\
 * run Command: mongod.exe --dbpath=(set to your data dir) --nojournal --bind_ip 127.0.0.1
   * Host: mongodb://127.0.0.1:27017

* Run the BackendServer:
  * cd to backend directory
  * npm install
  * (if there are vunrabilites with the install follow instructions to rectify)
  * npm start
   * localhost:9000

* Run the Frontend:
  * cd to frontend directory
  * npm install -g @vue/cli
  * (if there are vunrabilites with the install follow instructions to rectify)
  * npm run serve
   * localhost:8080


Connect to the website on localhost:8080.

Enjoy!
