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
    p1: cc.Node = null;
    @property(cc.Node)
    p2: cc.Node = null;
    @property(cc.Node)
    p3: cc.Node = null;
    @property(cc.Node)
    p4: cc.Node = null;
    @property(cc.Node)
    p5: cc.Node = null;
    @property(cc.Label)
    p6: cc.Label;

    @property(cc.Node)
    c1: cc.Node = null;
    @property(cc.Node)
    c2: cc.Node = null;
    @property(cc.Node)
    c3: cc.Node = null;
    @property(cc.Node)
    c4: cc.Node = null;
    @property(cc.Node)
    c5: cc.Node = null;
    @property(cc.Label)
    c6: cc.Label;
    
    @property(cc.Label)
    s1: cc.Label;
    @property(cc.Label)
    s2: cc.Label;
    @property(cc.Label)
    s3: cc.Label;
    @property(cc.Label)
    s4: cc.Label;
    @property(cc.Label)
    s5: cc.Label;

    @property(cc.Label)
    resultmoney: cc.Label;
    

    money = 0
    

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.getPlayerData()
        this.getComputerData()
        this.resultData()
        
    }

    start () {

    }
    getPlayerData(){
        var pp1 = localStorage.getItem('headAndTail1')
        var pp2 = localStorage.getItem('headAndTail2')
        var pp3 = localStorage.getItem('headAndTail3')
        var pp4 = localStorage.getItem('headAndTail4')
        var pp5 = localStorage.getItem('headAndTail5')
        console.log('pp1',pp1)
        if(pp1 == 'true'){
            this.p1.getChildByName('coin-head').active = true
        }else if(pp1 == 'false'){
            this.p1.getChildByName('coin-tail').active = true
        }

        if(pp2 == 'true'){
            this.p2.getChildByName('coin-head').active = true
        }else if(pp2 == 'false'){
            this.p2.getChildByName('coin-tail').active = true
        }

        if(pp3 == 'true'){
            this.p3.getChildByName('coin-head').active = true
        }else if(pp3 == 'false'){
            this.p3.getChildByName('coin-tail').active = true
        }

        if(pp4 == 'true'){
            this.p4.getChildByName('coin-head').active = true
        }else if(pp4 == 'false'){
            this.p4.getChildByName('coin-tail').active = true
        }

        if(pp5 == 'true'){
            this.p5.getChildByName('coin-head').active = true
        }else if(pp5 == 'false'){
            this.p5.getChildByName('coin-tail').active = true
        }
    }

    getComputerData(){
        var cc1 = localStorage.getItem('computerHistory1')
        var cc2 = localStorage.getItem('computerHistory2')
        var cc3 = localStorage.getItem('computerHistory3')
        var cc4 = localStorage.getItem('computerHistory4')
        var cc5 = localStorage.getItem('computerHistory5')

        if(cc1 == 'true'){
            this.c1.getChildByName('coin-head').active = true
        }else if(cc1 == 'false'){
            this.c1.getChildByName('coin-tail').active = true
        }

        if(cc2 == 'true'){
            this.c2.getChildByName('coin-head').active = true
        }else if(cc2 == 'false'){
            this.c2.getChildByName('coin-tail').active = true
        }

        if(cc3 == 'true'){
            this.c3.getChildByName('coin-head').active = true
        }else if(cc3 == 'false'){
            this.c3.getChildByName('coin-tail').active = true
        }

        if(cc4 == 'true'){
            this.c4.getChildByName('coin-head').active = true
        }else if(cc4 == 'false'){
            this.c4.getChildByName('coin-tail').active = true
        }

        if(cc5 == 'true'){
            this.c5.getChildByName('coin-head').active = true
        }else if(cc5 == 'false'){
            this.c5.getChildByName('coin-tail').active = true
        }
    }

    resultData(){
        var _s1 = localStorage.getItem('playerHistory1')
        var _s2 = localStorage.getItem('playerHistory2')
        var _s3 = localStorage.getItem('playerHistory3')
        var _s4 = localStorage.getItem('playerHistory4')
        var _s5 = localStorage.getItem('playerHistory5')
        if(parseInt(_s1) < 0){
            this.s1.node.color = new cc.Color(255, 0, 0);
        }else if(parseInt(_s1) > 0){
            this.s1.node.color = new cc.Color(0, 128, 0);
        }

        if(parseInt(_s2) < 0){
            this.s2.node.color = new cc.Color(255, 0, 0);
        }else if(parseInt(_s2) > 0){
            this.s2.node.color = new cc.Color(0, 128, 0);
        }

        if(parseInt(_s3) < 0){
            this.s3.node.color = new cc.Color(255, 0, 0);
        }else if(parseInt(_s3) > 0){
            this.s3.node.color = new cc.Color(0, 128, 0);
        }

        if(parseInt(_s4) < 0){
            this.s4.node.color = new cc.Color(255, 0, 0);
        }else if(parseInt(_s4) > 0){
            this.s4.node.color = new cc.Color(0, 128, 0);
        }

        if(parseInt(_s5) < 0){
            this.s5.node.color = new cc.Color(255, 0, 0);
        }else if(parseInt(_s5) > 0){
            this.s5.node.color = new cc.Color(0, 128, 0);
        }

        this.s1.string = _s1
        this.s2.string = _s2
        this.s3.string = _s3
        this.s4.string = _s4
        this.s5.string = _s5

        var moneyResult = parseInt(_s1) + parseInt(_s2) + parseInt(_s3) + parseInt(_s4) + parseInt(_s5)
        this.resultmoney.string = moneyResult.toString()
        if(moneyResult <= 0){
            this.resultmoney.node.color = new cc.Color(255, 0, 0);
        }else{
            this.resultmoney.node.color = new cc.Color(0, 128, 0);
        }

    }

    // update (dt) {}
}
