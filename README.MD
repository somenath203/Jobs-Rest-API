
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





