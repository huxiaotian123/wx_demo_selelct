var util = require('../../utils/util.js')


var params = {
  data: {
    isShow: false,
    item_list: [],
    first_index: -1,//第一层的选项
    array: [{
      message: '区域',
      list: [
        {
          dicNmae: "区域1",
        },
        {
          dicNmae: "区域2",
        },
        {
          dicNmae: "区域3",
        },
        {
          dicNmae: "区域4",
        }
      ]
    }, {
      message: '房型',
      list: [
        {
          dicNmae: "房型1",
        },
        {
          dicNmae: "房型2",
        },
        {
          dicNmae: "房型3",
        },
        {
          dicNmae: "房型4",
        }]
    },
    {
      message: '租金',
      list: [
        {
          dicNmae: "租金1",
        },
        {
          dicNmae: "租金2",
        },
        {
          dicNmae: "租金3",
        },
        {
          dicNmae: "租金4",
        }]
    },
    {
      message: '更多',
      list: [
        {
          dicNmae: "更多1",
        },
        {
          dicNmae: "更多2",
        },
        {
          dicNmae: "更多3",
        },
        {
          dicNmae: "更多4",
        }]
    }
    ]

  }

  ,
  expandList: function (event) {
    console.log(event)

    console.log(params.data.array);

    var index = event.target.id;
    showSuccessToast(event.target.dataset.item.message);
    if ( params.data.first_index == index && params.data.isShow) {
      params.data.first_index = -1;
      this.setData({ isShow: false, item_list: [] });
    } else {
      params.data.isShow = true;
      params.data.first_index = index;
      this.setData({ isShow: true, item_list: params.data.array[index].list });
    }



    // this.Page(params)
  },

clickItem: function (event){

}




}


Page(params)


function showSuccessToast(str) {
  wx.showToast({
    title: str,
    icon: 'success',
    duration: 2000
  })
}
