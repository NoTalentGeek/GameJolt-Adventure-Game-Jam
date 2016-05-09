var _00MainRoomState = {

    create:function(){

        console.log("_00MainRoomState.js.");
        _Game.physics.arcade.gravity.y = 1200;
        this._Tilemap = _Game.add.tilemap("_00MainRoomPath_Tilemap");
        this._Tilemap.addTilesetImage("Prototype96X96MainTile", "Prototype96X96MainTile_Image");

        this._Tile0_Layer = this._Tilemap.createLayer("Tile0");
        this._Tilemap.setCollisionByExclusion([0], true, "Tile0");

        this.solid_Group = _Game.add.group();

        this.CreateObjectSolid_Void(
            this.solid_Group,
            this._Tilemap,
            96,
            "ObjectSolid",
            "ObjectSolidBoulder",
            "Prototype96X96Boulder_Image"
        );

    },
    update:function(){},

    CreateObjectSolid_Void:function(
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