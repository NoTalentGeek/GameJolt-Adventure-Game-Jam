var bootState = {

    create: function(){

        _Game.smoothed = false;
        _Game.state.start("EntryPreloadState");

    },

    init: function(){

        console.log("BootState.js.");

        this.input.maxPointers = 1;
        this.scale.pageAlignHorizontally = true;
        this.stage.disableVisibilityChange = true;

    },

};