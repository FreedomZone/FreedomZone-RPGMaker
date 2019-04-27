/*:
 * @plugindesc A plugin for battle block.
 * @author Diving Fish
 * @help
 * A plugin for battle block.
 *
 */

Spriteset_Battle_createBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {
    Spriteset_Battle_createBattleback.call(this);
    this.createBlocks();
}


Spriteset_Battle.prototype.createBlocks = function () {
    var blockSprite = new Sprite();
    var allyBlockSprite = new Sprite();
    var enemyBlockSprite = new Sprite();
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5; j++) {
            var a_battleblock = new Window_BattleBlock();
            var b_battleblock = new Window_BattleBlock();
            a_battleblock._row = i;
            a_battleblock._col = j;
            b_battleblock._row = i;
            b_battleblock._col = j;
            b_battleblock._isEnemy = true;
            allyBlockSprite.addChild(a_battleblock);
            enemyBlockSprite.addChild(b_battleblock);
        }
    }
    blockSprite.addChild(allyBlockSprite);
    blockSprite.addChild(enemyBlockSprite);
    blockSprite._ally = allyBlockSprite.children;
    blockSprite._enemy = enemyBlockSprite.children;
    this._battleField.addChild(blockSprite);
    $gameSystem._blockSprite = blockSprite;
}


BattleManager_startAllSelection = BattleManager.startAllSelection;
BattleManager.startAllSelection = function() {
    this.inputtingAction().forGenerate = true;
  BattleManager_startAllSelection.call(this);
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
    this.needUpdate = true;
    this.selected = false;
    this.sticked = false;
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
}

Window_BattleBlock.prototype.update = function() {
    if (!this._isVisible) return;
    if (!this.needUpdate) return;
    this.needUpdate = false;
    if (!this.sticked) {
        this.x = 660 + 80 * this._row;
        this.y = 40 + 80 * this._col;
        this.width = 80;
        this.height = 80;
        if (this._isEnemy) {
            this.x = 1200 - this.x;
        }
        this.sticked = true;
    }
    if (this.selected) {
        this.opacity = 255;
        this.selected = false;
    } else {
        this.opacity = 128;
    }
    Window_Base.prototype.update.call(this);
};

Window_BattleBlock.prototype.row = function() {
    return this._row;
}

Window_BattleBlock.prototype.column = function() {
    return this._col;
}