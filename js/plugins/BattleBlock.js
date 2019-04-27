/*:
 * @plugindesc A plugin for battle block.
 * @author Diving Fish
 * @help
 * A plugin for battle block.
 *
 */


/* Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function() {
    Sprite_Battler_update.call(this);
    this.createBattleBlock();
};

Sprite_Battler.prototype.createBattleBlock = function() {
    var pp = this.parent.parent;
    if (pp.createdBattleBlock) return;
    pp.createdBattleBlock = true;
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            var a_battleblock = new Window_BattleBlock();
            var b_battleblock = new Window_BattleBlock();
            a_battleblock._row = i;
            a_battleblock._col = j;
            b_battleblock._row = i;
            b_battleblock._col = j;
            b_battleblock._isEnemy = true;
            pp.addChild(a_battleblock);
            pp.addChild(b_battleblock);
        }
    }
}

Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
Sprite_Battler.prototype.setBattler = function(battler) {
    Sprite_Battler_setBattler.call(this, battler);
    if (this._BattleBlock) this._BattleBlock.setBattler(battler);
}; */

Spriteset_Battle_createBattleField = Spriteset_Battle.prototype.createBattleField;
Spriteset_Battle.prototype.createBattleField = function() {
    Spriteset_Battle_createBattleField.call(this);
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var a_battleblock = new Window_BattleBlock();
            var b_battleblock = new Window_BattleBlock();
            a_battleblock._row = i;
            a_battleblock._col = j;
            b_battleblock._row = i;
            b_battleblock._col = j;
            b_battleblock._isEnemy = true;
            this._baseSprite.addChild(a_battleblock);
            this._baseSprite.addChild(b_battleblock);
        }
    }
}


BattleManager_startAllSelection = BattleManager.startAllSelection;
BattleManager.startAllSelection = function() {
    BattleManager_startAllSelection.call(this);
    var action = this.inputtingAction();
    var unit = action.opponentsUnit();
    var target = unit.smoothTarget(this._targetIndex);
    var row = target.row();
    var column = target.column();
};

// =============================================================

function Window_BattleBlock() {
    this.initialize.apply(this, arguments);
}

Window_BattleBlock.prototype = Object.create(Window_Base.prototype);
Window_BattleBlock.prototype.constructor = Window_BattleBlock;

Window_BattleBlock.prototype.initialize = function() {
    this._battler = null;
    this._col = 0;
    this._row = 0;
    this._isEnemy = false;
    this._isVisible = true;
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
}

Window_BattleBlock.prototype.update = function() {
    if (!this._isVisible) return;
    if (this.y == 120 + 80 * this._col) return;
    this.x = 740 + 80 * this._row;
    this.y = 120 + 80 * this._col;
    this.width = 80;
    this.height = 80;
    this.opacity = 255;
    if (this._isEnemy) {
        this.x = 1200 - this.x;
    }
    Window_Base.prototype.update.call(this);
};