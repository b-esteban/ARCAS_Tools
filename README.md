# react-keycloak-authentication

It demonstrates how to secure a React app using OpenID Connect and how to integrate multiple webswing apps to a react app
Check files:
- public/index.html - define integration with webswing
- src/components/Home.tsx - use integration with webswing
- src/context/AuthContextProvider.tsx - define keycloak connectivity 
- src/App.tsx & index.tsx - integrate keycloak to react app 
Added some examples to get a succesful docker environment:
- change to folder 'keycloack-webswing' 
    - rename webswing.config.localhost-15-02-2024 to webswing.config
    - make sure you have keycloak_data folder with all keycloack config for the integration setup 
- run 'docker compose up --force-recreate'
- run 'docker exec -it gephi-toolkit-demos-webswing-1 bash'
- cp 'oidc' folder with webswing security modules under /opt/webswing/security/
- kill and restart dockers with 'docker compose up'
- run demo with npm start 
