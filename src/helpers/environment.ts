let APIURL = '';
switch (window.location.hostname) {
 // this is the local host name of your react app
 case 'localhost' || '127.0.0.1':
 // this is the local host name of your API
 APIURL = 'http://localhost:3000'
}

export default APIURL;