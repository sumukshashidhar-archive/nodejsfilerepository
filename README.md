# nodejsfilerepository
A simple to use application that allows you to store and download files quickly from a nodejs web server

# Instructions
1. Make an uploads directory where your app resides.
2. Make a .env file with the following contents

## Contents of .env file
- PORT (5000 for reverse proxy configurations or 80 to directly web host
- IP (the ip to host this on. either localhost, or something like 0.0.0.0)
- mongoURI (the mongodb connection string)
- baseURL (the domain base url. for example. http://localhost/)



# To-Do
- [ ] Authentication for uploads and downloads
