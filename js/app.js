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
    'user_image'    : '',
    'status'        : 'Not everything is as it seems',
    'online'        : 'false'
}, {
    'id'            : 2,
    'name'          : 'Tiya',
    'last_seen'     : currenttime,
    'user_image'    : '',
    'status'        : 'Life is a chaos',
    'online'        : 'false'
}]);

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

// var root = new Root({
//     "users"  : users,
//     "chats": chats,
//     "allData" : allData
// });
// root.render();