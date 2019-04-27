//=============================================================================
// Yanfly Engine Plugins - Next Turn
// YEP_NextTurn.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_NextTurn = true;

var Yanfly = Yanfly || {};
Yanfly.NextTurn = Yanfly.NextTurn || {};
Yanfly.NextTurn.version = 1.0;

//=============================================================================
 /*:
 * @plugindesc v1.0 Allows end the turn
 * @author rododo
 * 
 * @param End Turn Text
 * @type string
 * @desc The label of End Turn command.
 * @default 结束回合
 */

Yanfly.Parameters = PluginManager.parameters('YEP_NextTurn');
Yanfly.NextTurn.txtEndTurn = Yanfly.Parameters['End Turn Text'];

Yanfly.NextTurn.Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
    Yanfly.NextTurn.Scene_Battle_createActorCommandWindow.call(this);
    this._actorCommandWindow.setHandler('end_turn', Yanfly.Instant.Scene_Battle_selectNextCommand.bind(this));
}

Yanfly.NextTurn.Window_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList; 
Window_ActorCommand.prototype.makeCommandList = function() {
    Yanfly.NextTurn.Window_ActorCommand_makeCommandList.call(this);
    if (this._actor) {
        this.addCommand(Yanfly.NextTurn.txtEndTurn, 'end_turn');
    }
}

Game_Actor.prototype.isInstantCast = function(item) {
    return true;
}