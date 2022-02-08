npm install         - for installation all dependencies (check notes below)\
npm run build       - build the project. all files will be at /build dir\
npm run start       - to start app at dev mode\
npm run:stub        - to start up the stub server\

todos:
1) to bundle project with webpack, mb an overall bundle weight could end up being reduced
2) if you need checkbox with appropriate color schema, do a customized one
3) to customize react datepicker


notes:\
    - if you have some problem with installation dependencies: \
        react-bootstrap-table-next, react-bootstrap-table2-paginator, use --force flag at command \
    - to make a returned value from CommonUtils.getDocsServiceHost as an empty string, \
      if the app will be on the same host with a server-side\
    - at the AgreementsTable component was set a page size parameter as 5, merely for pagination demo.\
        at release app version it's recommended to set this value as 15 (records a page)\
        and with http-query (for table data) pass the parameter of current page for calculation pagination offset.