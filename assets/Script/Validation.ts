const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    btnOk: cc.Node;

    @property(cc.Node)
    Playername: cc.Node;

    @property(cc.Node)
    PlayerMoney: cc.Node;

    @property(cc.Node)
    boxBetHead: cc.Node;

    @property(cc.Node)
    boxBetTail: cc.Node;

    @property(cc.Node)
    layoutResult: cc.Node;

    @property(cc.Node)
    labelResult: cc.Node;

    @property(cc.Node)
    popupTen: cc.Node;

    @property(cc.Node)
    popupNotENum: cc.Node;

    @property(cc.Label)
    Round: cc.Label;

    @property(cc.Node)
    handclose: cc.Node;

    money = 0
    headAndTail = true
    betHeadNum = 0
    betTailNum = 0
    computerRandom = true
    unloop = false
    resultNum = 0
    round = 0
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.Playername.getComponent(cc.Label).string = localStorage.getItem('Playername')
        this.money = 1000;
        this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
        this.headAndTail = true
        this.betHeadNum = 0
        this.betTailNum = 0
        this.round = 0
    }
    start () {
        
    }

    selectHeadAndTail(e, num){
        if(this.betHeadNum == 0 && this.betTailNum == 0){
            if(num == '1'){
                this.boxBetHead.getChildByName('bg').active = true
                this.boxBetTail.getChildByName('bg').active = false
                this.headAndTail = true
            }else{
                this.boxBetHead.getChildByName('bg').active = false
                this.boxBetTail.getChildByName('bg').active = true
                this.headAndTail = false
            }
        }
    }

    selectBet(e, num){
        if(num == '1'){
           if(this.money < 500){
                this.popupOpenNotEnum()
            }else{
                if(this.headAndTail == true){
                    this.betHeadNum = this.betHeadNum + 500
                    this.boxBetHead.getChildByName('bet').getComponent(cc.Label).string = this.betHeadNum.toString()
                }else{
                    this.betTailNum = this.betTailNum + 500
                    this.boxBetTail.getChildByName('bet').getComponent(cc.Label).string = this.betTailNum.toString()
                }
                this.money = this.money - 500
                this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
            }
        }
        if(num == '2'){
            if(this.money < 100){
                this.popupOpenNotEnum()
            }else{
                if(this.headAndTail == true){
                    this.betHeadNum = this.betHeadNum + 100
                    this.boxBetHead.getChildByName('bet').getComponent(cc.Label).string = this.betHeadNum.toString()
                }else{
                    this.betTailNum = this.betTailNum + 100
                    this.boxBetTail.getChildByName('bet').getComponent(cc.Label).string = this.betTailNum.toString()
                }
                this.money = this.money - 100
                this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
            }
        }
        if(num == '3'){
            if(this.money < 50){
                this.popupOpenNotEnum()
            }else{
                if(this.headAndTail == true){
                    this.betHeadNum = this.betHeadNum + 50
                    this.boxBetHead.getChildByName('bet').getComponent(cc.Label).string = this.betHeadNum.toString()
                }else{
                    this.betTailNum = this.betTailNum + 50
                    this.boxBetTail.getChildByName('bet').getComponent(cc.Label).string = this.betTailNum.toString()
                }
                this.money = this.money - 50
                this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
            }
        }
        if(num == '4'){
            if(this.money < 10){
                this.popupOpenNotEnum()
            }else{
                if(this.headAndTail == true){
                    this.betHeadNum = this.betHeadNum + 10
                    this.boxBetHead.getChildByName('bet').getComponent(cc.Label).string = this.betHeadNum.toString()
                }else{
                    this.betTailNum = this.betTailNum + 10
                    this.boxBetTail.getChildByName('bet').getComponent(cc.Label).string = this.betTailNum.toString()
                }
            this.money = this.money - 10
            this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
            }
        }
        if(this.money <= 10){
            if(this.unloop == false){
                this.unloop = true
                this.popupUp10()
            }
        }
    }

    btnSubmit(){
        var random = Math.floor(Math.random() * 2) + 1
        if(random == 1){
            this.computerRandom = true
            this.layoutResult.getChildByName('coin-head').active = true
            this.layoutResult.getChildByName('coin-tail').active = false
        }else{
            this.computerRandom = false
            this.layoutResult.getChildByName('coin-head').active = false
            this.layoutResult.getChildByName('coin-tail').active = true
        }
        
        if(this.computerRandom == true){
            if(this.betHeadNum == this.betTailNum){
                this.money = this.money + this.betHeadNum + this.betTailNum
                this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
                this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'คุณไม่ได้วางเดิมพัน'
            }else{
                this.resultNum = this.betHeadNum - this.betTailNum
                if(this.resultNum <= 0){
                    this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'แพ้ เสียเงิน ' + this.resultNum + 'บาท'
                }else if(this.resultNum == 0){
                    this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'เสมอ'
                }else{
                    this.money = this.money + this.resultNum + this.betHeadNum
                    this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
                    this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'ชนะ ได้รับเงิน ' + this.resultNum + 'บาท'
                }
            }
        }else{
            if(this.betHeadNum == this.betTailNum){
                this.money = this.money + this.betHeadNum + this.betTailNum
                this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
                this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'คุณไม่ได้วางเดิมพัน'
            }else{
                this.resultNum = this.betTailNum - this.betHeadNum
                if(this.resultNum <= 0){
                    this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'แพ้ เสียเงิน ' + this.resultNum + 'บาท'
                }else if(this.resultNum == 0){
                    this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'เสมอ'
                }else{
                    this.money = this.money + this.resultNum + this.betTailNum
                    this.PlayerMoney.getComponent(cc.Label).string = this.money.toString()
                    this.labelResult.getChildByName('popup').getChildByName('detail').getComponent(cc.Label).string = 'ชนะ ได้รับเงิน ' + this.resultNum + 'บาท'
                }
            }
        }

        var seq = cc.sequence(cc.moveBy(2, 200, 0), cc.moveBy(2, -200, 0));
       this.handclose.runAction(seq);
       this.btnOk.active = false
       setTimeout(()=>{
        this.btnOk.active = true
    }, 4000);

        this.historyGame()

        this.betTailNum = 0
        this.betHeadNum = 0
        this.boxBetHead.getChildByName('bet').getComponent(cc.Label).string = this.betHeadNum.toString()
        this.boxBetTail.getChildByName('bet').getComponent(cc.Label).string = this.betTailNum.toString()
        this.popupOpenWinLose()
        this.round++

        this.Round.string = this.round.toString()

        if(this.round == 5 || this.money <= 0){
            setTimeout(()=>{
                cc.director.loadScene("Result")
            }, 1500);
        }else{

        }
        
        
    }

    historyGame(){
        if(this.round == 0){
            localStorage.setItem('playerHistory1', this.resultNum.toString())
            localStorage.setItem('headAndTail1', this.headAndTail.toString())
            localStorage.setItem('computerHistory1', this.computerRandom.toString())
        }else if(this.round == 1){
            localStorage.setItem('playerHistory2', this.resultNum.toString())
            localStorage.setItem('headAndTail2', this.headAndTail.toString())
            localStorage.setItem('computerHistory2', this.computerRandom.toString())
        }else if(this.round == 2){
            localStorage.setItem('playerHistory3', this.resultNum.toString())
            localStorage.setItem('headAndTail3', this.headAndTail.toString())
            localStorage.setItem('computerHistory3', this.computerRandom.toString())
        }else if(this.round == 3){
            localStorage.setItem('playerHistory4', this.resultNum.toString())
            localStorage.setItem('headAndTail4', this.headAndTail.toString())
            localStorage.setItem('computerHistory4', this.computerRandom.toString())
        }else{
            localStorage.setItem('playerHistory5', this.resultNum.toString())
            localStorage.setItem('headAndTail5', this.headAndTail.toString())
            localStorage.setItem('computerHistory5', this.computerRandom.toString())
            localStorage.setItem('money',this.money.toString())
        }
    }
    popupOpenWinLose(){
        this.labelResult.active = true
    }
    popupCloseWinLose(){
        this.labelResult.active = false
    }
    popupUp10(){
        this.popupTen.active = true
    }
    popupDown10(){
        this.popupTen.active = false
    }
    popupOpenNotEnum(){
        this.popupNotENum.active = true
    }
    popupCloseNotEnum(){
        this.popupNotENum.active = false
    }

    update (dt) {
    }
}
