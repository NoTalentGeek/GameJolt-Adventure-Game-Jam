function ControlMainCameraBound_Void(){

    if(_Game.camera.x <= 0){ _Game.camera.x = 0; }
    if(_Game.camera.x >= screenWidth_Int - screenScaledWidth_Int)
        { _Game.camera.x = screenWidth_Int - screenScaledWidth_Int; }
    if(_Game.camera.y <= 0){ _Game.camera.y = 0; }
    if(_Game.camera.y >= screenHeight_Int - screenScaledHeight_Int)
        { _Game.camera.y = screenHeight_Int - screenScaledHeight_Int; }

}

function FindGameObjectByType_Object_Array(
    __Tilemap,
    _heightFix_Int,
    _layerName_String,
    _objectType_String
){

        var temporary_Object_Array = new Array();

        __Tilemap.objects[_layerName_String].forEach(

            function(_object){

                if(_object.properties.type == _objectType_String){

                    _object.y -= _heightFix_Int;
                    temporary_Object_Array.push(_object);

                }

            }

        );

        return temporary_Object_Array;

}