var _MainCharacter_Object;
var boomerang_Group;
var keyboard_Input;
var keyboardBitchSlap_KeyCode;
var keyboardBoomerang_KeyCode;
var keyboardLeft_KeyCode;
var keyboardRight_KeyCode;
var keyboardSword_KeyCode;

var boomerangCounterMax_Int = 20;
var boomerangCounterMaxLevel1_Int = 20;
var boomerangCounterMaxLevel2_Int = 30;
var boomerangSpeed_Int = 500;
var mainCharacterVelocity_Int = 150;
var Prototype32X32Boomerang_Path_String = "asset/prototype/prototype image/Prototype32X32Boomerang.png";
var Prototype32X32MainTile_Path_String = "asset/prototype/prototype image/Prototype32X32MainTile.png";
var Prototype64X32MainCharacter_Path_String = "asset/prototype/prototype image/Prototype64X32MainCharacter.png";
var screenHeight_Int = 320;
var screenWidth_Int = 320;

var Boomerang_Object = function(_velocity_Int){

    this._Sprite = _Game.add.sprite(
        _MainCharacter_Object._Sprite.x,
        _MainCharacter_Object._Sprite.y,
        "Prototype32X32Boomerang_Image"
    );
    _Game.physics.arcade.enable(this._Sprite);
    boomerang_Group.add(this);
    this._Sprite.body.allowGravity = false;
    this._Sprite.smoothed = false;
    this.counter_Int = 0;
    this.level_Int = 1;
    this.return_Bool = false;
    this.velocity_Int = _velocity_Int;
    this.mainCharacterFacingRight_Bool
        = _MainCharacter_Object.facingRight_Bool;

    //Fix the boomerang spawn point.
    if(this.mainCharacterFacingRight_Bool == true)
        { this._Sprite.x = this._Sprite.x + this._Sprite.width; }
    else if(this.mainCharacterFacingRight_Bool == false)
        { this._Sprite.x = this._Sprite.x - this._Sprite.width; }
    this._Sprite.y = this._Sprite.y + this._Sprite.height/2;

};
Boomerang_Object.prototype.constructor = Boomerang_Object;
Boomerang_Object.prototype.Update_Void = function(){

    this._Sprite.anchor.x = 0.5;
    this._Sprite.anchor.y = 0.5;
    this._Sprite.rotation += 0.5;

    if(this.counter_Int < boomerangCounterMax_Int){

        this.counter_Int ++;
        this.return_Bool = false;
        this._Sprite.body.velocity.x = 0;
        if(this.mainCharacterFacingRight_Bool == true)
            { this._Sprite.body.velocity.x = this.velocity_Int; }
        else if(this.mainCharacterFacingRight_Bool == false)
            { this._Sprite.body.velocity.x = this.velocity_Int; }

    }
    else if(this.counter_Int >= boomerangCounterMax_Int)
        { this.return_Bool = true; }

    if(this.return_Bool == true){

        this._Sprite.body.velocity.x = 0;
        this._Sprite.body.velocity.x = -this.velocity_Int;

        if(this._Sprite.y != _MainCharacter_Object._Sprite.y){

            if(this._Sprite.y > _MainCharacter_Object._Sprite.y)
                { this._Sprite.y --; }
            else if(this._Sprite.y < _MainCharacter_Object._Sprite.y)
                { this._Sprite.y ++; }

        }

        if(this.mainCharacterFacingRight_Bool == true){

            if(this._Sprite.x < _MainCharacter_Object._Sprite.x){

                _MainCharacter_Object.boomerangOut_Bool = false;
                boomerang_Group.remove(this);
                this._Sprite.visible = false;
                this.counter_Int = 0;

            }

        }
        else if(this.mainCharacterFacingRight_Bool == false){

            if(this._Sprite.x > _MainCharacter_Object._Sprite.x){

                _MainCharacter_Object.boomerangOut_Bool = false;
                boomerang_Group.remove(this);
                this._Sprite.visible = false;
                this.counter_Int = 0;

            }

        }

    }
    else if(this.return_Bool == false){

        this._Sprite.body.velocity.x = 0;
        this._Sprite.body.velocity.x = this.velocity_Int;

    }

};

var Boot_State = {

    create: function(){

        _Game.smoothed = false;
        _Game.state.start("Main_State");
        boomerang_Group = _Game.add.group();
        keyboard_Input = _Game.input.keyboard;
        keyboardBitchSlap_KeyCode = Phaser.KeyCode.J;
        keyboardBoomerang_KeyCode = Phaser.KeyCode.L;
        keyboardLeft_KeyCode = Phaser.KeyCode.A;
        keyboardRight_KeyCode = Phaser.KeyCode.D;
        keyboardSword_KeyCode = Phaser.KeyCode.K;

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
    _y_Int
){

    this._Sprite = _Game.add.sprite(
        _x_Int,
        _y_Int,
        "Prototype64X32MainCharacter_Image"
    );
    _Game.physics.arcade.enable(this._Sprite);
    this._Sprite.smoothed = false;
    this._Sprite.body.collideWorldBounds = true;
    this.facingRight_Bool = true;
    this.boomerangOut_Bool = false;

};
MainCharacter_Object.prototype.constructor = MainCharacter_Object;
MainCharacter_Object.prototype.FireBoomerang_Object = function(){

    if(this.boomerangOut_Bool == false){

        if(keyboard_Input.isDown(keyboardBoomerang_KeyCode)){

            if(this.facingRight_Bool == true)
                { new Boomerang_Object(boomerangSpeed_Int); }
            else if(this.facingRight_Bool == false)
                { new Boomerang_Object(-1*boomerangSpeed_Int); }
            this.boomerangOut_Bool = true;

        }

    }
    return this;

};
MainCharacter_Object.prototype.Move_Object = function(){

    this._Sprite.body.velocity.x = 0;
    if(keyboard_Input.isDown(keyboardLeft_KeyCode)){

        this._Sprite.body.velocity.x = -mainCharacterVelocity_Int;
        this.facingRight_Bool = false;

    }
    else if(keyboard_Input.isDown(keyboardRight_KeyCode)){

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

        _MainCharacter_Object = new MainCharacter_Object(0, 0);
        _Game.physics.arcade.gravity.y = 1200;

    },
    preload: function(){

        _Game.load.image("Prototype32X32Boomerang_Image", Prototype32X32Boomerang_Path_String);
        _Game.load.image("Prototype32X32MainTile_Image", Prototype32X32MainTile_Path_String);
        _Game.load.image("Prototype64X32MainCharacter_Image", Prototype64X32MainCharacter_Path_String);

    },
    update: function(){

        _MainCharacter_Object.Update_Void();
        for(var i_Int = 0; i_Int < boomerang_Group.length; i_Int ++)
            { boomerang_Group.getAt(i_Int).Update_Void(); }

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