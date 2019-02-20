# Mobile hot reload
Mobile hot reload is a testing tool for develop purpose. I made it for my self. Use it at your own risk

# Requirements
    * Must be in the same lan as the dev server.
    * Must use numeric ip address eg: 192.168.0.2:8080
    
# Instructions
    1 git clone https://github.com/pvtallulah/mobile-hot-reload.git
    2 cd mobile-hot-reload
    3 Edit (or not) config.xml
    4 Compile ipa/apk
    5 Open App in mobile device and input your dev server url

NOTE:
  - If you use cordova, plugins wont work.
  - If you call an API, must have "Access-Control-Allow-Origin": "*" on server side.