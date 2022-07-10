
# Nodejs JobsAPI

This is a Restful API created with express.js. 

Here, a recuriter who wants to hire candidate for his/her company 
can use this API. 

Here, in this API, the recuriter first needs to register for an
account. Then, the recuriter can create as many job openings as 
possible and all the job openings created by the recuriter will
be stored in his/her account.

The recuriter also has the option of editing a particular job 
posting as well deleting a particular job.

All the data will be stored inside MongoDB database.

<br />

This Restful API is also protected from different malicious activites
with the help packages like `helmet.js` and `xss-clean`.

<br />

This API also has the feature of restricting user from making too
many repeated requests requests contionusly to API endpoints with the
help of `express-rate-limit`.

<br />

Click to checkout and try the API yourself in the swagger documentation of this API :- https://somm-jobs-api-prod.herokuapp.com/

<br />

## Instructions regarting authorization in swagger docs

### Step 1 :- 

After registering for a new account or logging in with an existing account, we will get a token :- 

![alt text](./Screenshot%20(37).png)


### Step 2 :- 

Copy the token, then, open **Authorize** dialog box located at the starting of the docs.

![alt text](./Screenshot%20(38).png)


### Step 3 :- 

After opening, paste the token and then click on **login**

![alt text](./Screenshot%20(39).png)

<br />

Now, you will be able to create, update, fetch and as well as delete jobs.

If you don't follow the above steps after creating an account or login into existing account and directly try to create or edit or fetch or delete jobs, then we will get this error :- "errorMsg": "Authentication Error | No headers found"
