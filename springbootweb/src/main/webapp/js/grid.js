/**
 * id:table id,如：<table id="test" class="easyui-datagrid">
 * columns:显示的列配置项,如:[[{field:'name',title: '属性名称',align: 'center'},{field:'age',title: '年龄',width: 50}]]
 * dataGridParams:datagrid相关的参数配置项，详见easyuiAPI-datagrid;
 */
function newloadGrid(id,columns,dataGridParams){
	if(id ==null || columns==null || dataGridParams.url==null){
		console.error("datagrid id、colums、url不能为空！");
		return;
	};
	if (dataGridParams.pageSize!=null && dataGridParams.pageSize != undefined) {
		if(!isNaN(dataGridParams.pageSize)){
			dataGridParams.pageList=[dataGridParams.pageSize,dataGridParams.pageSize*2,dataGridParams.pageSize*3,dataGridParams.pageSize*4,dataGridParams.pageSize*5,dataGridParams.pageSize*10]
			dataGridParams.pagination = 'true';
		}else{
			console.error("pageSize必须要为数字！");
		    return;
		}
	} 
	
	$('#'+id).datagrid({
		remoteSort : dataGridParams.remoteSort ? dataGridParams.remoteSort : false,
		title: dataGridParams.title ? dataGridParams.title : '',
/*		width: dataGridParams.width ? dataGridParams.width : 'auto',
		height: dataGridParams.height ? dataGridParams.height : 'auto',*/
		url: dataGridParams.url,
		method: dataGridParams.method =='get' ? 'get' : 'post',
		queryParams: dataGridParams.queryParams ? dataGridParams.queryParams : {},//请求参数对象{a:'1'}
		columns:columns, //列配置项
	    striped: true , //是否显示斑马线效果。
	    collapsible:false,//表格是否可折叠
	    singleSelect : dataGridParams.singleSelect == 'true' ? true : false,  //允许单行选择true/false
	    fitColumns: dataGridParams.fitColumns == 'true' ? true : false, //真正的自动展开/收缩列的大小，以适应网格的宽度，防止水平滚动。
	    loadMsg:'数据加载中请稍后……',  
	    pagination: dataGridParams.pagination =='true' ? true : false,  //如果为true，则在DataGrid控件底部显示分页工具栏。
    	pagePosition:'bottom',//定义分页工具栏的位置。可用的值有：'top','bottom','both'。
	    rownumbers: dataGridParams.rownumbers=='false' ? false : true, //如果为true，则显示一个行号列。
	    pageNumber : 1, //在设置分页属性的时候初始化页码。
	    pageSize: dataGridParams.pageSize ? dataGridParams.pageSize : 10,//在设置分页属性的时候初始化页面大小。
	    pageList: dataGridParams.pageList ? dataGridParams.pageList : [10,20,30,40,50,100],//在设置分页属性的时候 初始化页面大小选择列表。
	    nowrap: true, //如果为true，则在同一行中显示数据。设置为true可以提高加载性能。
	    resizable: true, //如果为true，允许列改变大小。
	    rownumberWidth : isNaN(dataGridParams.rownumberWidth) ? dataGridParams.rownumberWidth : 30,
	    toolbar: dataGridParams.toolbar ? dataGridParams.toolbar : [], //顶部工具栏的DataGrid面板
	    onBeforeLoad: dataGridParams.onBeforeLoad ? dataGridParams.onBeforeLoad : function(param){
	    	//在载入请求数据数据之前触发，如果返回false可终止载入数据操作。
	    	console.log('onBeforeLoad');
	    },
	    onLoadSuccess: dataGridParams.onLoadSuccess ? dataGridParams.onLoadSuccess : function(data){
	    	//在数据加载成功的时候触发
	    	console.log('onLoadSuccess');
	    },
	    onSelect:dataGridParams.onSelect ? dataGridParams.onSelect :function(){
	    	console.log('onSelect');
	    },
	    view: dataGridParams.view ? dataGridParams.view : undefined,
	    detailFormatter : dataGridParams.detailFormatter ? dataGridParams.detailFormatter : function(){}
	});
}