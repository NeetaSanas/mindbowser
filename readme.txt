# Mindbowser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Important For run this project
1. Download this project & if you have installed php environment (Wamp/Xamp server) them put extracted direcory in wamp->www folder Otherwise place anywhere (You can login with static credentials) 
     -- Create database in mysql phpmyadmin
     -- import database.sql file in created database
     -- change database name in server->database.php file
     -- 

2. Run npm install command for install dependencies

3. Run ng serve --open for compile 

4. Navigate to browser with `http://localhost:4200/`  

5. If you could not setup environment for php then, Login with static credentials 
   -- EMail : 'n@gmail.com' Password: 'admin123' (Stored in src/assets/users.json file)



## References for stripe payment integration 
  -- https://stripe.com/docs/testing#cards
  

## API description
   -- Created with Angular as frontend & Core PHP and MySql as Backend. 
   -- Every request from Angular will communicate with server.service.ts file and 
   -- server.service will pass it to the => server/server.php.
   -- Server.php will decide whether can access php function according to loggedIn flag.
   -- Database.php file is for establish connection with mysql.
   -- session.php file for establish session and can use with throught application.
   -- Password is encrpted using MD5 encryption method 
   -- Stripe Payment Gateway used for payments Enter 4242 4242 4242 4242 as Card number 
      (Beacause this is demo payment mode). After making payment token is generated and received in my stripe dashboard
   -- Tried to follow project instructions like routing, lazy loading, auth-guard, scss styling, 
      material design, flex layout, 

