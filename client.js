// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value =  GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value =  GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value =  GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value =  GameMode.Parameters.GetBool("Fly");
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Kills",
  DisplayName: "Убийства",
  ShortDisplayName: "Убийства"
 },
 {
  Value: "Deaths",
  DisplayName: "Смерти",
  ShortDisplayName: "Смерти"
 },
{
  Value: "Status",
  DisplayName: "Статус",
  ShortDisplayName: "Статус"
 },
 {
  Value: "Scores",
  DisplayName: "Очки",
  ShortDisplayName: "Очки"
 }
];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "Statistics\Deaths",
 ShortDisplayName: "Statistics\Deaths"
};
// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
 Teams.Add("Red", "<color=red>ИГРОКИ</a>", { r
: 80 });
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add
(1);
}

// ������ ���������  
Ui.GetContext().Hint.Value = "ЗДАРОВА";
des = "@Vanhek34";  
sed = "@Vanhek34";  
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "sed" };  
Teams.Get("Red").Properties.Get("sed").Value = sed; 
 
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };
var maxDeaths = Players.MaxCount * 6;
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths;
// задаем что выводить в лидербордах
LeaderBoard.PlayerLeaderBoardValues = [
 {
  Value: "Status",
  DisplayName: "<color=orange>Status</a>",
  ShortDisplayName: "<color=orange>Status</a>"
 },
 {
  Value: "Scores",
  DisplayName: "<color=pink>money</a>",
  ShortDisplayName: "<color=pink>money</a>"
 },
 {
  Value: "Spawns",
  DisplayName: "Donat money",
  ShortDisplayName: "Donat money"
 },
 {

  Value: "Kills",
  DisplayName: "color=yellow>пропуск</a>",
  ShortDisplayName: "<color=yellow>пропуск</a>", }



];
LeaderBoard.TeamLeaderBoardValue = {
 Value: "Deaths",
 DisplayName: "<color=gooboy>death</a>",
 ShortDisplayName: "<color=gooboy>death</a>"
};





if (blue || !red && !blue) {
 Teams.Add("Blue", "<color=orange>ИГРОКИ</a>", { g: 128 });
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
 if(GameMode.Parameters.GetBool("BlueHasNothing")){
  var inventory = Inventory.GetContext();
  Teams.Get("Blue").Inventory.Main.Value = false;
  Teams.Get("Blue").Inventory.Secondary.Value = false;
  Teams.Get("Blue").Inventory.Melee.Value = false;
  Teams.Get("Blue").Inventory.Explosive.Value = false;
  Teams.Get("Blue").Inventory.Build.Value = false;
 }
}
// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value = false;
ld.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;


// ????????? ???? ? ??????? ?? ???????  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);  
Ui.GetContext().Hint.Value = player +"Дарова братан;)";  
 
if (player.id  == ""){ 
player.inventory.MainInfinity.Value = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; 
player.contextedProperties.SkinType.Value = 1;

var adm = AreaPlayerTriggerService.Get("adm"); 
adm.Tags = ["adm"];  
adm.Enable = true;  
adm.OnEnter.Add(function(player) {  
 player.inventory.Main.Value = true;  
 player.inventory.MainInfinity.Value = true;  
 player.inventory.Secondary.Value = true;   
 player.inventory.SecondaryInfinity.Value = true;  
 player.inventory.Melee.Value = true;  
 player.inventory.Explosive.Value = true;  
 player.inventory.ExplosiveInfinity.Value = true;  
 player.inventory.Build.Value = true;  
 player.inventory.BuildInfinity.Value = true;  
 player.Build.FlyEnable.Value = true;  

player.Build.FloodFill.Value = true;      
player.Build.FillQuad.Value = true;      
player.Build.RemoveQuad.Value = true;      
player.Build.BalkLenChange.Value = true;      
player.Build.FlyEnable.Value = true;      
player.Build.SetSkyEnable.Value = true;    
    
player.Build.GenMapEnable.Value = true;    
player.Build.ChangeCameraPointsEnable.Value = true;      
player.Build.QuadChangeEnable.Value = true;      
player.Build.BuildModeEnable.Value = true;      
player.Build.CollapseChangeEnable.Value = true;      
player.Build.RenameMapEnable.Value = true;      
player.Build.ChangeMapAuthorsEnable.Value = true;      
player.Build.LoadMapEnable.Value = true;      
player.Build.ChangeSpawnsEnable.Value = true;      
player.Build.BuildRangeEnable.Value = true; 
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ"

var РАЗБАН = AreaPlayerTriggerService.Get("РАЗБАН"); 
РАЗБАН.Tags = ["РАЗБАН"]; 
РАЗБАН.Enable = true; 
РАЗБАН.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = true; 
      sPlayer.Spawns.Spawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " разбанен"; 
      PlayersBanLust.splice(m[props.Get("index").Value],1);
 } 
});
var БАН = AreaPlayerTriggerService.Get("БАН"); 
БАН.Tags = ["БАН"]; 
БАН.Enable = true; 
БАН.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = false; 
      sPlayer.Spawns.Despawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " забанен"; 
      PlayersBanLust.push(sPlayer.id);
 } 
});
var props = Properties.GetContext(); 
var ВЫБОР = AreaPlayerTriggerService.Get("ВЫБОР"); 
ВЫБОР.Tags = ["ВЫБОР"]; 
ВЫБОР.Enable = true; 
ВЫБОР.OnEnter.Add(function(player) { 
var j = Players.GetEnumerator(); 
var prop = player.Properties; 
if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
}else{ 
 var m = []; 
 while(j.moveNext()) { 
   m.push(j.Current.id); 
} 
if (props.Get("index").Value >= m.length) { 
      props.Get("index").Value = 0; 
} else {  props.Get("index").Value += 1; } 

var sPlayer = Players.Get(m[props.Get("index").Value]); 
player.Ui.Hint.Value = "Игрок: " + sPlayer.nickName + " выбран"; 
 } 
});
//   
var des = "<color=red>ПАРКУР НА АДМИНКУ</a>";   
Teams.Get("Red").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp2.Value = { Team: "Blue", Prop: "Des" };   
Teams.Get("Blue").Properties.Get("Des").Value = des;  
Ui.GetContext().TeamProp1.Value = { Team: "Red", Prop: "Des" };

var ПАЛЁТ = AreaPlayerTriggerService.Get("ПАЛЁТ");  
ПАЛЁТ.Tags = ["ПАЛЁТ"];  
ПАЛЁТ.Enable = true;  
ПАЛЁТ.OnEnter.Add(function(player, area){

if(player.Properties.Get(LeaderBoardProp).Value >= 1000000){ 
player.Ui.Hint.Value = "ТЫ КУПИЛ ПАЛЁТ"; 
player.Properties.Get(LeaderBoardProp). Value -= 1000000; 
player.Build.FlyEnable.Value = true;
}else{ 
player.Ui.Hint.Value = "1000000 = ПАЛЁТ,А У ТЕБЯ: " + player.Properties.Get(LeaderBoardProp).Value; 
} 
});

var ГРАНАТЫ = AreaPlayerTriggerService.Get("ГРАНАТЫ");  
ГРАНАТЫ.Tags = ["ГРАНАТЫ"];  
ГРАНАТЫ.Enable = true;  
ГРАНАТЫ.OnEnter.Add(function(player, area){

if(player.Properties.Scores.Value >= 100000){ 
player.Ui.Hint.Value = "ТЫ КУПИЛ ГРАНАТЫ"; 
player.Properties.Scores.Value -= 100000; 
player.Inventory.Explosive.Value = true;
}else{ 
player.Ui.Hint.Value = "100000 = ГРАНАТЫ,А У ТЕБЯ: " + player.Properties.Scores.Value; 
} 
});

var НОЖ = AreaPlayerTriggerService.Get("НОЖ");  
НОЖ.Tags = ["НОЖ"];
НОЖ.Enable = true; 
НОЖ.OnEnter.Add(function(player, area){

if(player.Properties.Scores.Value >= 1000){ 
player.Ui.Hint.Value = "ТЫ КУПИЛ НОЖ"; 
player.Properties.Scores.Value -= 1000; 
player.Inventory.Melee.Value = true;
}else{
player.Ui.Hint.Value = "1000 = А У ТЕБЯ : " + player.Properties.Scores.Value; 
} 
});

var ПЕСТ = AreaPlayerTriggerService.Get("ПЕСТ");  
ПЕСИ.Tags = ["ПЕСТ"];  
ПЕСТ.Enable = true;  
ПЕСТ.OnEnter.Add(function(player, area){

if(player.Properties.Scores.Value >= 10000){
player.Ui.Hint.Value = "ТЫ КУПИЛ ПЕСТОЛЕТ"; 
player.Properties.Scores.Value -= 10000; 
player.Inventory.Secondary.Value = true;
}else{
player.Ui.Hint.Value = "10000 = А У ТЕБЯ: " + player.Properties.Scores.Value;
} 
});

var ОСНОВА = AreaPlayerTriggerService.Get("ОСНОВА");  
ОСНОВА.Tags = ["ОСНОВА"];  
ОСНОВА.Enable = true;  
ОСНОВА.OnEnter.Add(function(player, area){

if(player.Properties.Scores.Value >= 50000){ 
player.Ui.Hint.Value = "ТЫ КУПИЛ ОСНОВУ"; 
player.Properties.Scores.Value -= 50000; 
player.Inventory.Main.Value = true; 
}else{ 
player.Ui.Hint.Value = "50000 = А У ТЕБЯ: " + player.Properties.Scores.Value;
} 
});

var 100 = AreaPlayerTriggerService.Get("100"); 
100.Tags = ["100"]; 
100.Enable = true; 
100.OnEnter.Add(function (player, area) {
player.Properties.Scores.Value += 100;
});

var 20 = AreaPlayerTriggerService.Get("20"); 
20.Tags = ["20"]; 
20.Enable = true; 
20.OnEnter.Add(function (player, area) {
player.Properties.Scores.Value += 20;

});
if (player.id == ""){
player.Properties.Get("С").Value = "<color=red>БАН</color>"

player.Spawns.Enable = false; 
player.Spawns.Despawn();

}
// entrance1 
Teams.OnRequestJoinTeam.Add(function(player,team){if(player.id ==
"9183CF2B463E5CD6" || player.id == "9183CF2B463E5CD6"){
player.Properties.Get("VipAdmin").Value = "<size=30><color=#ff0000>Б</color><color=#ff0007>О</color><color=#ff1724>С</color><color=#ff2714>С</color></size>";
player.inventory.Explosive.Value = true; 
player.inventory.ExplosiveInfinity.Value = true; 
player.inventory.Main.Value = true; 
player.inventory.MainInfinity.Value = true; 
player.inventory.Secondary.Value = true 
player.inventory.SecondaryInfinity.Value = true; 
player.inventory.Melee.Value = true; 
player.inventory.Build.Value = true; 
player.inventory.BuildInfinity.Value = true; 
player.Build.BuildModeEnable.Value = true; 
player.Build.Pipette.Value = true; 
player.Build.BuildRangeEnable.Value = true; 
player.Build.FlyEnable.Value = true; 
player.Build.FillQuad.Value = true; 
player.Damage.DamageIn.Value = true;
Build.GetContext().FloodFill.Value = true;
player.Properties.Get("coins").Value = Infinity; 
player.contextedProperties.SkinType.Value = 1;
}
  }   
    )                




