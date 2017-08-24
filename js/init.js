(function (exports) {
    'use strict';

    function getChannels() {
        var channels = [
            {
                type: "playlist",
                id: "PLD58L7yXrnpX4PkYiTaN4pB93iMQmGVsp",
                title: "Wagle ki Duniya"
            },
            {
                type: "playlist",
                id: "PLT3JklPII0JBFRXBPptTibXVzNjXWNiN9",
                title: "Shriman Shrimati"
            },
            {
                type: "playlist",
                id: "PL8EBAB6A11AE34A2D",
                title: "Tehkikaat"
            },
            {
                type: "playlist",
                id: "PLUiMfS6qzIMxiHu2N2Px1ISp5vxCm3PMo",
                title: "Byomkesh Bakshi",
                reversePlaylist: true
            },
            {
                type: "playlist",
                id: "PL_c7L8RcICKpLCrTT_ZlyBlooup2aHBjT",
                title: "Malgudi Days"
            },
            {
                type: "playlist",
                id: "PL0CaUqi81mPl2HCNflNuzo3UtuDMsfA4a",
                title: "Fauji"
            },
            {
                type: "playlist",
                id: "PL736648C2016C16F9",
                title: "Dekh Bhai Dekh"
            },
            {
                type: "playlist",
                id: "PL058KYRnhLpdDaoTKKBznoXaDN8Vlxv8f",
                title: "Nukkad",
                reversePlaylist: true
            },
            {
                type: "playlist",
                id: "PL1EG23oYcaFu6SNAiofd0uco0sD0JeVji",
                title: "Bharat ek Khoj"
            },
            {
                type: "playlist",
                id: "PLFFKZZGAlUGxBkIc9Ib_ZHUBxJaiMb98a",
                title: "Tenali Rama"
            },
            {
                type: "playlist",
                id: "PLimqN_U88-tuzyiULOGk64ttu2Yhpxxy8",
                title: "Flop Show"
            }
        ];

        return channels;
    }

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: false,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "DoordarshanNational",
        devKey: "AIzaSyBwGt74xF1lwsuzP1iueYr4SJ_QukuSlqI",
        showLatestChannel: true,
        channels: getChannels(),
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));