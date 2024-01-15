
A cheat sheet for Angular and NX CLI.  


#### Angualar CLI

```shell

# Quick start
npm install -g @angular/cli
ng new ssm-app
cd ssm-app
ng serve --open


ng update @angular/cli @angular/core

# To create a new project
ng new <project name>  

# To host the project on 4200 port
ng serve  

# To host application specific host/port
ng serve --port <port no> --host <host name>

# We can use a short alias as well:
ng s --p <port no> --h <hostname>

# Tooling
ng lint # To lint and look for JavaScript errors
ng lint --format stylish # Linting and formatting the output
ng lint --fix # Lint and attempt to fix all the problems
ng build # to build a project in the dist folder 
ng build ---target  # Target for which we want to build
ng build --prod # To build in production mode
ng test # To run spec files
ng test --codeCoverage --watch=false
ng e2e # To run e2e test cases
ng doc # To look for angular documentation
ng help # To get help on angular cli commands

# To change the .angular-cli.json config
# to change properties
ng set 
# For e.g. ng set default.styleExt scss
# ng set default.styleExt scss -g -- To set in global angular-cli file


# Components ==================================================
ng generate component         # To generate new component
ng g c                        # Short notation to generate component
ng g c  --flat                # Want to generate folder name as well?
ng g c  --inline-template     # Want to generate HTML file?
ng g c  -it                   # Short notation
ng g c  --inline-style        # Want to generate css file?
ng g c  -is                   # Short notation
ng g c  --view-encapsulation  # View encapsulation stratergy
ng g c  -ve                   # Short notation
ng g c  --change-detection    # Change detection strategy
ng g c  --dry-run             # To only report files and don't write them
ng g c  -d                    # Short notation
ng g c  -m  -d 


# Name of module where we need to add component as dependency
# Directives and services

ng generate directive         # To generate directive
ng g d                        # short notation
ng g d  -d                    # To only report files and don't write them
ng generate service           # To generate service
ng g s                        # short notation
ng g s  -d                    # To only report files and don't write them
ng g s  -m 


# Name of module where we need to add service as dependency
# Classes, Interface, pipe, and enums

ng generate class             # To generate class
ng g cl                       # short notation
ng generate interface         # To generate interface
ng g i                        # short notation
ng generate pipe              # To generate pipe
ng g p                        # short notation
ng generate enum              # To generate enum
ng g e                        # short notation


# Module and Routing
ng generate module            # To generate module

ng g m                        # To short notation
ng g m  --skipTests trus -d   # To skip generate spec file for the module
ng g m  --routing             # To generate module with routing file
ng g guard                    # To generate guard to route


```

#### Using NX
```shell


# Creating the workspace
npx create-nx-workspace@latest ssm-workspace --appName=ssm --preset=angular-nest --style=css --routing

# WILL ASK QUESTIONS
npx create-nx-workspace@latest ssm-workspace ssm

# ADDING NPM LIBS
npx nx add @angular/material
npx nx add @ngrx/store

# ADDING FEATURES AS LIBS
npx nx g lib api-interfaces
npx nx g lib material --style=scss
npx nx g lib core-state --routing=true --style=scss
npx nx g lib core-data --routing=true --style=scss

# GENERATE SERVICES
npx nx g s services/features/featurea --project=core-data

# GENERATE AND ADD ROUTING 
npx nx g m app-routing --flat -m app.module.ts

# GENERATE COMPONENT
npx nx g c wells -m app.module.ts --style=scss

```
