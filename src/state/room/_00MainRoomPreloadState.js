var _00MainRoomPreloadState = {

    create:function(){ console.log("_00MainRoomPreloadState.js."); },
    preload:function(){

        _Game.load.image("Prototype32X32MainCharacter_Image", _Prototype32X32MainCharacterPath_String);
        _Game.load.image("Prototype96X96Boulder_Image", _Prototype96X96BoulderPath_String);
        _Game.load.image("Prototype96X96MainTile_Image", _Prototype96X96MainTilePath_String);

        _Game.load.tilemap("_00MainRoomPath_Tilemap", _00MainRoomPath_String, null, Phaser.Tilemap.TILED_JSON);

    },
    update:function(){ _Game.state.start ("_00MainRoomState"); },

};