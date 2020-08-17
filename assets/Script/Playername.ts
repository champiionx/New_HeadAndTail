// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Playername: cc.Node;

    @property(cc.Node)
    checkname: cc.Node;



    // LIFE-CYCLE CALLBACKS:

     onLoad () {}

    start () {

    }
    submitName(e, name){
        // localStorage.setItem("playerName", this.playerName.string)
        //cc.director.loadScene("validation")
        var playname = this.Playername.getComponent(cc.Label).string
        // console.log(playname)
     
 
     const checkChar = /^[A-Za-z0-9]+$/;
 
     if(playname.match(checkChar)){
         console.log("OK")
 
          localStorage.setItem("Playername", playname)
          cc.director.loadScene("Validation")
     }
     else{
         console.log('name failed');
         this.checkname.active = true
     }
     }
 
     okcheckname(e){
         this.checkname.active = false
     }

    // update (dt) {}
}
