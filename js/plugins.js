// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.30 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1280","Screen Height":"720","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"control","Enable Fast Forward":"true","Word Wrapping":"true","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"20","X Buffer":"0","Y Buffer":"36","Battle Transition":"false"}},
{"name":"YEP_GabWindow","status":true,"description":"v1.06 The Gab Window functions as a window for random\r\njibber jabber that does not require a message window.","parameters":{"---General---":"","Gab Font Name":"SimHei","Gab Font Size":"28","Character X Pos":"36","Character Y Pos":"60","Base Wait Time":"90","Time Per Character":"4","Fade Rate":"16","Anti-Repeat":"true","---Map---":"","Map Y Location":"72","Map Dim Color 1":"rgba(0, 0, 0, 0.6)","Map Dim Color 2":"rgba(0, 0, 0, 0.3)","---Battle---":"","Battle Y Location":"108","Battle Dim Color 1":"rgba(0, 0, 0, 0.6)","Battle Dim Color 2":"rgba(0, 0, 0, 0)"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.50 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"stb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"true","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"15","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"true","Show Max":"true"}},
{"name":"YEP_X_BattleSysSTB","status":true,"description":"v1.05 (Requires YEP_BattleEngineCore.js) Add STB (Standard\nTurn Battle) into your game using this plugin!","parameters":{"---General---":"","Action Speed":"agi","Delay Status Adjust":"true","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn Order---":"","Show Turn Window":"false","Turn Window X":"Graphics.boxWidth - width","Turn Window Y":"this.fittingHeight(2)","Turn Window Width":"200","Turn Window Height":"Graphics.boxHeight - statusHeight - this.fittingHeight(2)","Current Battler Color":"6","Actor Battler Color":"4","Enemy Battler Color":"2"}},
{"name":"YEP_X_TurnOrderDisplay","status":true,"description":"v1.03 Displays the turn order for turn-based battle systems\nand allows for various display options.","parameters":{"---Default---":"","Show Turn Order":"true","---Settings---":"","Icon Size":"32","Position X":"right","Position Y":"54","Turn Direction":"left","Performed Spacing":"true","---Allies---":"","Ally Border Color":"4","Ally Back Color":"22","Ally Icon":"0","---Enemies---":"","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_RowFormation","status":true,"description":"v1.16 Places party members into row formations to give\nthem distinct advantages based on row location.","parameters":{"---General---":"","Maximum Rows":"5","Command Name":"Row","Auto Add Menu":"true","Show Menu Command":"true","Enable Menu Command":"true","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"1","---Defaults---":"","Default Row":"1","Enemy Row Lock":"false","---Menu Settings---":"","Use Map Sprite":"false","Front Buffer Y":"(rect.height - 48) / 2;","Side Buffer Y":"(rect.height - 64) / 2;","---Position Settings---":"","Alive Row Index":"false","Maximum Row X":"screenWidth - partySize * 32 - 16","Maximum Row Y":"screenHeight - statusHeight - 16","Minimum Row Y":"screenHeight - statusHeight - 16 - (maxSize * 64)","Center Row Y":"(maxRowY + minRowY) / 2 + 16","---Row 1 Settings---":"","Row 1 Name":"Front Row","Row 1 Help Line 1":"This is the front row.","Row 1 Help Line 2":"Place your melee allies here.","Row 1 States":"","Row 1 States 1.5.0":"[]","Row 1 Home X":"maxRowX - (maxRows - rowId) * 100 + rowIndex * 32","Row 1 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 70","---Row 2 Settings---":"","Row 2 Name":"Middle Row","Row 2 Help Line 1":"This is the middle row.","Row 2 Help Line 2":"Place allies here who can fight from the middle.","Row 2 States":"","Row 2 States 1.5.0":"[]","Row 2 Home X":"maxRowX - (maxRows - rowId) * 100 + rowIndex * 32","Row 2 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 70","---Row 3 Settings---":"","Row 3 Name":"Back Row","Row 3 Help Line 1":"This is the back row.","Row 3 Help Line 2":"Place allies here to take less melee damage.","Row 3 States":"","Row 3 States 1.5.0":"[]","Row 3 Home X":"maxRowX - (maxRows - rowId) * 100 + rowIndex * 32","Row 3 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 70","---Row 4 Settings---":"","Row 4 Name":"Row 4","Row 4 Help Line 1":"Help Description","Row 4 Help Line 2":"Help Description","Row 4 States":"","Row 4 States 1.5.0":"[]","Row 4 Home X":"maxRowX - (maxRows - rowId) * 100 + rowIndex * 32","Row 4 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 70","---Row 5 Settings---":"","Row 5 Name":"Row 5","Row 5 Help Line 1":"Help Description","Row 5 Help Line 2":"Help Description","Row 5 States":"","Row 5 States 1.5.0":"[]","Row 5 Home X":"maxRowX - (maxRows - rowId) * 100 + rowIndex * 32","Row 5 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 70","---Row 6 Settings---":"","Row 6 Name":"Row 6","Row 6 Help Line 1":"Help Description","Row 6 Help Line 2":"Help Description","Row 6 States":"","Row 6 States 1.5.0":"[]","Row 6 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 6 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 7 Settings---":"","Row 7 Name":"Row 7","Row 7 Help Line 1":"Help Description","Row 7 Help Line 2":"Help Description","Row 7 States":"","Row 7 States 1.5.0":"[]","Row 7 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 7 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 8 Settings---":"","Row 8 Name":"Row 8","Row 8 Help Line 1":"Help Description","Row 8 Help Line 2":"Help Description","Row 8 States":"","Row 8 States 1.5.0":"[]","Row 8 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 8 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 9 Settings---":"","Row 9 Name":"Row 9","Row 9 Help Line 1":"Help Description","Row 9 Help Line 2":"Help Description","Row 9 States":"","Row 9 States 1.5.0":"[]","Row 9 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 9 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Row 10 Settings---":"","Row 10 Name":"Row 10","Row 10 Help Line 1":"Help Description","Row 10 Help Line 2":"Help Description","Row 10 States":"","Row 10 States 1.5.0":"[]","Row 10 Home X":"maxRowX - (maxRows - rowId) * 112 + rowIndex * 32","Row 10 Home Y":"centerY + ((rowSize / -2 + 0.5) + rowIndex) * 32","---Enemy Rows---":"","Adjust Relative":"true","Enemy Row X":"screenX - (rowId - 1) * 64","Enemy Row Y":"screenY"}},
{"name":"YEP_TargetCore","status":true,"description":"v1.05 Expand the target scope from RPG Maker's default\nlimitations for better target control.","parameters":{"---Battle Engine---":"","Everybody Text":"All Allies and Enemies","All But User Text":"All %1 But %2","Random Any Text":"%1 Random","---Multiple Of---":"","Multiple Text":"%1 with %2 as a Multiple of %3","Multiple Everybody":"Anyone","Multiple Allies":"Any Ally","Multiple Foes":"Any Foe","---Row Formation---":"","Target Row Text":"%1's Row","Front Row Text":"%1 Front Row","Back Row Text":"%1 Back Row","Specific Row Text":"Specific %1 Row","Row Enemies":"Enemy","Row Allies":"Allied"}},
{"name":"YEP_BattleSelectCursor","status":true,"description":"v1.04 Adds a cursor to battle when selecting allies and/or\nenemies for targeting.","parameters":{"Ally Cursor":"cursor_4x2","Enemy Cursor":"cursor_4x2","Anchor X":"center","Anchor Y":"bottom","Position X":"center","Position Y":"top"}},
{"name":"BattleBlock","status":true,"description":"A plugin for battle block.","parameters":{}},
{"name":"YEP_InstantCast","status":true,"description":"v1.12 Allows skills/items to be instantly cast after being\nselected in the battle menu.","parameters":{"Instant Icon":"66"}},
{"name":"YEP_NextTurn","status":true,"description":"v1.0 Allows end the turn","parameters":{"End Turn Text":"结束回合"}}
];
