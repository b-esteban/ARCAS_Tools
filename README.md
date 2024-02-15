# react-keycloak-authentication

It demonstrates how to secure a React app using OpenID Connect and how to integrate multiple webswing apps to a react app
Check files:
- public/index.html - define integration with webswing
- src/components/Home.tsx - use integration with webswing
- src/context/AuthContextProvider.tsx - define keycloak connectivity 
- src/App.tsx & index.tsx - integrate keycloak to react app 
Added some examples to get a succesful docker environment:
- change to folder 'keycloack-webswing' - run 'docker compose up'
- cp config files for webswing to webswing docker 
- docker exec -it gephi-toolkit-demos-webswing-1 bash 
- from bash shell 'cp /opt/app/webswing.config.localhost-15-02-2024 ./webswing.config'
- kill and restart dockers 
