var _Game = new Phaser.Game(1024, 576, Phaser.AUTO);
//_Game.state.add("EntryState", entryState);
//_Game.state.add("MenuPreloadState", menuPreloadState);
//_Game.state.add("MenuState", menuState);
_Game.state.add("BootState", bootState);
_Game.state.add("EntryPreloadState", entryPreloadState);
_Game.state.start("BootState");