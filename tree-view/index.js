// components/path-view/path-view.js
 
Component({
	properties: {
		dptId: {
			type: Int16Array,
			value: 0,
		},
		iconCls: {
			type: String,
			value: "folder1",
		},
		text: {
			type: String,
			value: "标题",
		},
		show: {
			type: String,
			value: "标题",
			observer:function(){
				console.log('ok')
			}
		},		
		expendLevel: {
			type: Int16Array,
			value: 1,
		},
		level: {
			type: Int16Array,
			value: 1,
		},
		isExpend: {
			type: Boolean,
			value: true,
		},
		isParent: {
			type: Boolean,
			value: false,
		},
		children: {
			type: Array,
			value: [],
		}
	},
	data: {
		sub_level: 0,
		txt: "标题",
		id: "",
		children: [],
		expend: true,
		icon: 'folder',
		isExpend:false
	},
	methods: {
		initView(item) {
			console.log(item)
		},
		click(e){
			var that = this
			console.log(e.currentTarget)
			that.data.isExpend = !that.data.isExpend
			that.setData({
				isExpend:that.data.isExpend
			})
		}
	},
	ready:function(){
		this.properties.show="000",
		console.log("liuliu组件中的数据:" ,this.properties);　　　　　　//其实this.data===this.properties   ==>true;
　　 }
});
