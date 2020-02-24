
let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 5 },
            { id: 2, message: 'It\'s my first post', likesCount: 10 }],

    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Hello my friend!' },
            { id: 2, message: 'Are you ready to fly?' },
            { id: 3, message: 'Don\'t make me wait.' }
        ],

        dialogs: [
            { id: 1, name: 'Rodion', logo:'https://steamuserimages-a.akamaihd.net/ugc/923680909724837919/E7A91B0552563DD2FEBE759742EFE483E0FD1DCF/' },
            { id: 2, name: 'Alex', logo:'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png' }, 
            { id: 3, name: 'Dima', logo:'https://klike.net/uploads/posts/2019-03/1551511862_48.jpg' }]

    },

    sideBar: {
        friends: [
            { id: 1, name: 'Rodion', logo:'https://steamuserimages-a.akamaihd.net/ugc/923680909724837919/E7A91B0552563DD2FEBE759742EFE483E0FD1DCF/' },
            { id: 2, name: 'Alex', logo:'https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png' }, 
            { id: 3, name: 'Dima', logo:'https://klike.net/uploads/posts/2019-03/1551511862_48.jpg' }]

    }


}

export default state;