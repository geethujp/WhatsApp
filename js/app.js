var time        = new Date();
var hours       = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
var am_pm       = time.getHours() >= 12 ? "PM" : "AM";
hours           = hours < 10 ? "0" + hours : hours;
var minutes     = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
var seconds     = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
var currenttime = hours + ":" + minutes + ":" + seconds + " " + am_pm;

var users       = new UserCollection ([{
    'id'            : 1,
    'name'          : 'Geethu',           
    'last_seen'     : currenttime,
    'user_image'    : '../images/geethu.jpg',
    'status'        : 'Not everything is as it seems',
    'online'        : 'false'
}, {
    'id'            : 2,
    'name'          : 'Dan',
    'last_seen'     : currenttime,
    'user_image'    : '../images/dan.jpg',
    'status'        : 'Life is a chaos',
    'online'        : 'false'
},
{
    'id'            : 3,
    'name'          : 'Hawari',
    'last_seen'     : currenttime,
    'user_image'    : '../images/hawari.jpg',
    'status'        : 'chicken Pox.',
    'online'        : 'false'
},
{
    'id'            : 4,
    'name'          : 'Rohith',
    'last_seen'     : currenttime,
    'user_image'    : '../images/kp.jpg',
    'status'        : 'All is well',
    'online'        : 'false'
},
{
    'id'            : 5,
    'name'          : 'Elizabeth',
    'last_seen'     : currenttime,
    'user_image'    : '../images/eli.jpg',
    'status'        : 'Shut up and show me the code',
    'online'        : 'false'
},
{
    'id'            : 6,
    'name'          : 'Mahima',
    'last_seen'     : currenttime,
    'user_image'    : '../images/mahi.jpg',
    'status'        : 'Happiness',
    'online'        : 'false'
},
{
    'id'            : 7,
    'name'          : 'Akshaya',
    'last_seen'     : currenttime,
    'user_image'    : '../images/aks.jpg',
    'status'        : 'Nothing feels as good as being healthy',
    'online'        : 'false'
}
]);

var messages    = new MessageCollection ([{
    'id'        : 1,
    'text'      : 'Hi there',
    'date'      : '01/01/2016',
    'time'      : '10.30pm',
    'status'    : 'delivered'
}, {
    'id'        : 2,
    'text'      : 'take Care',
    'date'      : '30/03/2015',
    'time'      : '05.44am',
    'status'    : 'pending'
}]);

var LS_KEY  = 'Chat_Data';
data        = JSON.parse(localStorage.getItem(this.LS_KEY));
var allData = new ChatCollection ([{
        user_id       : 1,
        receiver_id   : 2,
        message_id    : 1  
},{
        user_id       : 2,
        receiver_id   : 1,
        message_id    : 2  
}]);

allData.add(data);

var root = new Root({
    "users"   : users,
    "messages": messages,
    "allData" : allData
});
root.render();