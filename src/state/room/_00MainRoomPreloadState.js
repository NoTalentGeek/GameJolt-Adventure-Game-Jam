var _00MainRoomPreloadState = {

    create:function(){ console.log("_00MainRoomPreloadState.js."); },
    preload:function(){

        _Game.load.image("Prototype64X64MainCharacter_Image", _Prototype64X64MainCharacterPath_String);
        _Game.load.image("Prototype192X192Boulder_Image", _Prototype192X192BoulderPath_String);
        _Game.load.image("Prototype192X192MainTile_Image", _Prototype192X192MainTilePath_String);

        _Game.load.tilemap("_00MainRoomPath_Tilemap", _00MainRoomPath_String, null, Phaser.Tilemap.TILED_JSON);

    },
    update:function(){ _Game.state.start ("_00MainRoomState"); },

};