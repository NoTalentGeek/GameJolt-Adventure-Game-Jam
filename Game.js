var _Game = new Phaser.Game(
    screenWidth_Int,
    screenHeight_Int,
    Phaser.AUTO
);
//keyboard_Cursors = _Game.input.keyboard.createCursorKeys();
_Game.state.add("_00MainRoomPreloadState", _00MainRoomPreloadState);
_Game.state.add("_00MainRoomState", _00MainRoomState);
_Game.state.add("BootState", bootState);
_Game.state.add("EntryPreloadState", entryPreloadState);
_Game.state.add("EntryState", entryState);
_Game.state.add("MenuPreloadState", menuPreloadState);
_Game.state.add("MenuState", menuState);
_Game.state.start("BootState");