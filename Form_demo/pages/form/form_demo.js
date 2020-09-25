var util = require('../../utils/util.js')
Page({
    data:{
        leftContent:[],
        site:["待选择>"]
        // isBoolean:false,
    },
    onLoad:function(){
        this.setData({
            leftContent:[
                {
                    content:"假期是否离渝*",
                    contentId:"01",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"暑假期间有无接触湖北旅居的人员*",
                    contentId:"02",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"暑假期间有无接触过确诊或疑似病例*",
                    contentId:"03",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"现居住地有无确诊或疑似病例*",
                    contentId:"04",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"体温是否正常*",
                    contentId:"05",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"有无咳嗽、乏力、鼻塞、流涕、咽痛、腹泻等症状*",
                    contentId:"06",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"本人及家庭成员是否为确诊病例*",
                    contentId:"07",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"本人及家庭成员是否为疑似病例*",
                    contentId:"08",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                },{
                    content:"有无疾病史*",
                    contentId:"09",
                    pic_content:["待选择>","有>","无>"],
                    index:0
                }
            ]
        })
        var time = util.formatTime(new Date());
        this.setData({
            time:time
        })
    },
    //手动改变picker的值
    handlePic:function(e){
        console.log(e);
        let currentIndex=e.target.dataset.current;
        console.log(this.data);
        this.data.leftContent[currentIndex].index=e.detail.value;
        // let index = e.detail.value;
        //判断是否填的有，填有字体会变红色
        // if(this.data.leftContent[currentIndex].pic_content[index]="有"){
        //     this.setData({
        //         isBoolean:true
        //     })
        // }
        //把所选内容存入数组中
        this.setData({
            leftContent:this.data.leftContent
        })
    },
    //手动改变地址
    handleSite:function(e){
        console.log(e);
        this.setData({
            site:e.detail.value
        })
    }
})