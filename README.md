npm install         - for installation all dependencies (check notes below)\
npm run build       - build the project. all files will be at /build dir\
npm run start       - to start app at dev mode\
npm run:stub        - to start up the stub server\

todos:
1) bundle project with webpack
2) if you need checkbox with appropriate color schema, do a customized one


notes:\
    - if you have some problem with installation dependencies: \
        react-bootstrap-table-next, react-bootstrap-table2-paginator, use --force flag at command \
    - to make a returned value from CommonUtils.getDocsServiceHost as an empty string, \
      if the app will be on the same host with a server-side