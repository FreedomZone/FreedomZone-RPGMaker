/*:
 * @plugindesc A plugin for battle block.
 * @author Diving Fish
 * @help
 * A plugin for battle block.
 *
 */



Game_Battler.prototype.isBlock = function() {
    if (this._isBlock) return true;
    return false;
}

Game_Battler_createActions = Game_Battler.prototype.createActions;
Game_Battler.prototype.createActions = function() {
    if (this.isBlock()) return;
    Game_Battler_createActions.call(this);
}

Game_Battler_makeActions = Game_Battler.prototype.makeActions;
Game_Battler.prototype.makeActions = function() {
    if (this.isBlock()) return;
    Game_Battler_makeActions.call(this);
}

Game_Unit.prototype.isAllDead = function() {
    var am = this.aliveMembers();
    for (let m of am) {
        if (!m.isBlock()) return false;
    }
    return true;
}

function Game_EnemyBlock() {
    this.initialize.apply(this, arguments);
    this._isBlock = true;
}

Game_EnemyBlock.prototype = Object.create(Game_Enemy.prototype);
Game_EnemyBlock.prototype.constructor = Game_EnemyBlock;

Game_EnemyBlock.prototype.update = function() {

}

Game_EnemyBlock.prototype.gainHp = function() {

}

Game_EnemyBlock.prototype.gainMp = function() {
    
}

Game_EnemyBlock.prototype.gainTp = function() {
    
}

Game_EnemyBlock.prototype.name = function() {
    return ""
}

Game_EnemyBlock.prototype.updateMain = function() {
    
}

Game_Enemy_startAnimation = Game_Enemy.prototype.startAnimation;
Game_EnemyBlock.prototype.startAnimation = function(animationId, mirror, delay) {
    for (let enemy of $gameTroop.members()) {
        if (!enemy.isBlock() && enemy.row() == this.row() && enemy.column() == this.column()) {
            return;
        }
    }
    Game_Enemy_startAnimation.call(this, animationId, mirror, delay);
}

Game_Troop.prototype.nonBlockMembers = function() {
    return this.members().filter(function(member) {
        return !member.isBlock();
    })
}

Game_Troop.prototype.setup = function(troopId) {
    this.clear();
    this._troopId = troopId;
    this._enemies = [];
    this.troop().members.forEach(function(member) {
        if ($dataEnemies[member.enemyId]) {
            var enemyId = member.enemyId;
            var x = member.x;
            var y = member.y;
            var enemy = new Game_Enemy(enemyId, x, y);
            if (member.hidden) {
                enemy.hide();
            }
            this._enemies.push(enemy);
        }
    }, this);
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= 5; j++) {
            var enemy = new Game_EnemyBlock(5, 0, 0);
            enemy._row = i;
            enemy._column = j;
            this._enemies.push(enemy);
        }
    }
    this.makeUniqueNames();
};

Game_Party.prototype.battleMembers = function() {
    var members = this.allMembers();
    if (!this._added) {
        this._added = true;
        this.allyBlocks = [];
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <= 5; j++) {
                var ally = new Game_AllyBlock(50 + (i - 1) * 5 + j);
                ally._row = i;
                ally._column = j;
                this.allyBlocks.push(ally);
            }
        }
    }
    return members.concat(this.allyBlocks);
};

Scene_Battle.prototype.changeInputWindow = function() {
    if (BattleManager.isInputting()) {
        var actor = BattleManager.actor();
        if (actor && !actor.isBlock()) {
            this.startActorCommandSelection();
        } else {
            this.startPartyCommandSelection();
        }
    } else {
        this.endCommandSelection();
    }
};


// ===================================

function Game_AllyBlock() {
    this.initialize.apply(this, arguments);
    this._isBlock = true;
}

Game_AllyBlock.prototype = Object.create(Game_Actor.prototype);
Game_AllyBlock.prototype.constructor = Game_AllyBlock;

Game_AllyBlock.prototype.update = function() {

}

Game_AllyBlock.prototype.gainHp = function() {

}

Game_AllyBlock.prototype.gainMp = function() {
    
}

Game_AllyBlock.prototype.gainTp = function() {
    
}

Game_AllyBlock.prototype.name = function() {
    return ""
}

Game_AllyBlock.prototype.updateMain = function() {
    
}

Game_Actor_startAnimation = Game_Actor.prototype.startAnimation;
Game_AllyBlock.prototype.startAnimation = function(animationId, mirror, delay) {
    for (let actor of $gameParty.members()) {
        if (!actor.isBlock() && actor.row() == this.row() && actor.column() == this.column()) {
            return;
        }
    }
    Game_Actor_startAnimation.call(this, animationId, mirror, delay);
}

Game_Unit.prototype.agility = function() {
    var members = this.members().filter(function(member) {
        return !member.isBlock();
    });
    if (members.length === 0) {
        return 1;
    }
    var sum = members.reduce(function(r, member) {
        return r + member.agi;
    }, 0);
    return sum / members.length;
};


Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor && !this._actor.isBlock()) {
        this.addAttackCommand();
        this.addSkillCommands();
        this.addGuardCommand();
        this.addItemCommand();
    }
};

Window_BattleStatus.prototype.drawItem = function(index) {
    var actor = $gameParty.battleMembers()[index];
    if (actor.isBlock()) return;
    this.drawBasicArea(this.basicAreaRect(index), actor);
    this.drawGaugeArea(this.gaugeAreaRect(index), actor);
};

Game_Follower.prototype.actor = function() {
    var member = $gameParty.battleMembers()[this._memberIndex];
    if (member) {
        if (member.isBlock()) return null;
        return member;
    }
    return null;
};


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

Spriteset_Battle.prototype.createActors = function() {
    this._actorSprites = [];
    for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
        this._actorSprites[i] = new Sprite_Actor();
        this._battleField.addChild(this._actorSprites[i]);
    }
};

Game_Party.prototype.maxBattleMembers = function() {
    return 29;
}

// ===================================

Window_BattleStatus.prototype.select = function(index) {
    this._index = index;
    this._stayCount = 0;
    //this.ensureCursorVisible();
    this.updateCursor();
    this.callUpdateHelp();
};

Window_BattleStatus.prototype.cursorRight = function(wrap) {
    var length = $gameParty.battleMembers().length - 25;
    var selected = $gameParty.battleMembers()[this._index];
    var blockIndex = length + (selected.row() - 1) * 5 + selected.column() - 1;
    blockIndex += 5;
    if (blockIndex >= length && blockIndex < this.maxItems()) this.select(blockIndex);
};

Window_BattleStatus.prototype.cursorDown = function(wrap) {
    var length = $gameParty.battleMembers().length - 25;
    var selected = $gameParty.battleMembers()[this._index];
    var blockIndex = length + (selected.row() - 1) * 5 + selected.column() - 1;
    blockIndex += 1;
    if (blockIndex >= length && blockIndex < this.maxItems() && ((blockIndex - length) % 5 != 0)) this.select(blockIndex);
};

Window_BattleStatus.prototype.cursorUp = function(wrap) {
    var length = $gameParty.battleMembers().length - 25;
    var selected = $gameParty.battleMembers()[this._index];
    var blockIndex = length + (selected.row() - 1) * 5 + selected.column() - 1;
    blockIndex -= 1;
    if (blockIndex >= length && blockIndex < this.maxItems() && ((blockIndex - length) % 5 != 4)) this.select(blockIndex);
};

Window_BattleStatus.prototype.cursorLeft = function(wrap) {
    var length = $gameParty.battleMembers().length - 25;
    var selected = $gameParty.battleMembers()[this._index];
    var blockIndex = length + (selected.row() - 1) * 5 + selected.column() - 1;
    blockIndex -= 5;
    if (blockIndex >= length && blockIndex < this.maxItems()) this.select(blockIndex);
};

Window_BattleEnemy.prototype.cursorRight = function(wrap) {
    var selected = this.enemy();
    var column = selected.column();
    var row = selected.row();
    if (row == 1) return;
    for (var i = 0; i < this._enemies.length; i++) {
        var enemy = this._enemies[i];
        if (enemy.row() == (row - 1) && enemy.column() == column && enemy.isBlock()) this.select(i);
    }
};

Window_BattleEnemy.prototype.cursorLeft = function(wrap) {
    var selected = this.enemy();
    var column = selected.column();
    var row = selected.row();
    if (row == 5) return;
    for (var i = 0; i < this._enemies.length; i++) {
        var enemy = this._enemies[i];
        if (enemy.row() == (row + 1) && enemy.column() == column && enemy.isBlock()) this.select(i);
    }
};

Window_BattleEnemy.prototype.cursorUp = function(wrap) {
    var selected = this.enemy();
    var column = selected.column();
    var row = selected.row();
    if (column == 1) return;
    for (var i = 0; i < this._enemies.length; i++) {
        var enemy = this._enemies[i];
        if (enemy.row() == row && enemy.column() == (column - 1) && enemy.isBlock()) this.select(i);
    }
};

Window_BattleEnemy.prototype.cursorDown = function(wrap) {
    var selected = this.enemy();
    var column = selected.column();
    var row = selected.row();
    if (column == 5) return;
    for (var i = 0; i < this._enemies.length; i++) {
        var enemy = this._enemies[i];
        if (enemy.row() == row && enemy.column() == (column + 1) && enemy.isBlock()) this.select(i);
    }
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