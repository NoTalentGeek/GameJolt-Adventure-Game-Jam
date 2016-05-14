var _MainCharacter_Object;
var keyboard_Input;
var mainCharacterVelocity_Int = 150;
var Prototype32X32Boomerang_Path_String ="asset/prototype/prototype image/Prototype32X32Boomerang.png";
var Prototype32X32MainTile_Path_String ="asset/prototype/prototype image/Prototype32X32MainTile.png";
var Prototype64X32MainCharacter_Path_String ="asset/prototype/prototype image/Prototype64X32MainCharacter.png";
var screenHeight_Int = 320;
var screenWidth_Int = 320;

var Boot_State = {

    create: function(){

        _Game.smoothed = false;
        _Game.state.start("Main_State");
        keyboard_Input = _Game.input.keyboard.createCursorKeys();

    },
    init: function(){

        this.input.maxPointers = 1;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.stage.disableVisibilityChange = true;

    },

};

var MainCharacter_Object = function(
    _x_Int,
    _y_Int,
    _sprite_String
){

    this._Sprite = _Game.add.sprite(
        _x_Int,
        _y_Int,
        _sprite_String
    );
    _Game.physics.arcade.enable(this._Sprite);
    this._Sprite.smoothed = false;
    this._Sprite.body.collideWorldBounds = true;
    this.facingRight_Bool = true;

};
MainCharacter_Object.prototype.constructor = MainCharacter_Object;
MainCharacter_Object.prototype.FireBoomerang_Object = function(){

    if(keyboard_Input.space.isDown){ console.log("Throw boomerang."); }
    return this;

};
MainCharacter_Object.prototype.Move_Object = function(){

    this._Sprite.body.velocity.x = 0;
    if(keyboard_Input.left.isDown){

        this._Sprite.body.velocity.x = -mainCharacterVelocity_Int;
        this.facingRight_Bool = false;

    }
    else if(keyboard_Input.right.isDown){

        this._Sprite.body.velocity.x = mainCharacterVelocity_Int;
        this.facingRight_Bool = true;

    }
    return this;

};
MainCharacter_Object.prototype.Update_Void = function(){

    this.FireBoomerang_Object().Move_Object();

};

var Main_State = {

    create: function(){

        _MainCharacter_Object = new MainCharacter_Object(
            0, 0,
            "Prototype64X32MainCharacter_Image"
        );
        _Game.physics.arcade.gravity.y = 1200;

    },
    preload: function(){

        _Game.load.image("Prototype32X32Boomerang_Image", Prototype32X32Boomerang_Path_String);
        _Game.load.image("Prototype32X32MainTile_Image", Prototype32X32MainTile_Path_String);
        _Game.load.image("Prototype64X32MainCharacter_Image", Prototype64X32MainCharacter_Path_String);

    },
    update: function(){

        _MainCharacter_Object.Update_Void();

    },

};

var _Game = new Phaser.Game(
    screenWidth_Int,
    screenHeight_Int,
    Phaser.AUTO
);

_Game.state.add("Boot_State", Boot_State);
_Game.state.add("Main_State", Main_State);
_Game.state.start("Boot_State");