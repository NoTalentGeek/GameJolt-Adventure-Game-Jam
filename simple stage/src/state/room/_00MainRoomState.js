var _00MainRoomState = {

    create:function(){

        console.log("_00MainRoomState.js.");

        _Game.physics.arcade.gravity.y = 1200;
        _Game.world.setBounds(0, 0, 2048, 1152);

        this._Tilemap = _Game.add.tilemap("_00MainRoomPath_Tilemap");
        this._Tilemap.addTilesetImage("Prototype64X64MainCharacter", "Prototype64X64MainCharacter_Image");
        this._Tilemap.addTilesetImage("Prototype192X192Boulder", "Prototype192X192Boulder_Image");
        this._Tilemap.addTilesetImage("Prototype192X192MainTile", "Prototype192X192MainTile_Image");
        this._Tilemap.setCollisionByExclusion([0], true, "Tile0");
        this._Tilemap.smoothed = false;

        this._Tile0_Layer = this._Tilemap.createLayer("Tile0");

        this.solid_Group = _Game.add.group();

    },
    update:function(){

        //TESTING CODE.
        _Game.camera.y += 10;

    },
    CreateSprite_Void:function(
        __Group,
        __Tilemap,
        _heightFix_String,
        _layerName_String,
        _objectType_String,
        _spriteName_String
    ){

        var find_Object_Array = FindGameObjectByType_Object_Array(
            __Tilemap,
            _heightFix_String,
            _layerName_String,
            _objectType_String
        );
        var temporary_Object_Array = new Array(find_Object_Array.length);

        for(var i = 0; i < temporary_Object_Array.length; i ++){

            console.log(find_Object_Array[i].x);
            console.log(find_Object_Array[i].y);

            temporary_Object_Array[i] = new Phaser.Sprite(
                _Game,
                find_Object_Array[i].x,
                find_Object_Array[i].y,
                _spriteName_String
            );
            __Group.add(temporary_Object_Array[i]);

        }

    },

};