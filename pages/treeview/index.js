const app = getApp()

Page({
	
	 data:{
		 expendLevel:1,//展开的层级，从0开始
	 },
	onLoad(option){
		var that = this
		wx.request({
			url:app.globalData.url2 + '/org/getAllDptTree/true/true/4',
			data:{
				id: 0//app.globalData.cabiUserInfo.dptId
			},
			success(res) {
				that.treeValue = res.data
				that.setData({
					
					treeValue : res.data
				})
			}
		})
		 
	},
	
	

})
