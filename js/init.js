(function (exports) {
    'use strict';

    function getChannels() {
        var channels = [
            {
                type: "playlist",
                id: "PLD58L7yXrnpX4PkYiTaN4pB93iMQmGVsp",
                title: "Wagle ki duniya"
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
                title: "Byomkesh Bakshi"
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
        devKey: "AIzaSyAIe1ylMweWtAV0bWKQVFh-_237OPSCLOQ",
        showLatestChannel: true,
        channels: getChannels(),
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));