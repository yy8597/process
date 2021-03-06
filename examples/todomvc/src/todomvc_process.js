import Process from 'process-table'

let process = new Process({
	"新增事项": ["存储新事项数据", "渲染新事项"],
	"编辑事项内容": ["更新事项内容", "渲染事项视图"]，
	"切换事项状态": ["更新事项状态", "渲染事项视图"],
	"删除事项": ["删除事项数据", "删除事项视图"],
	"过滤事项": ["过滤不符合条件的事项", "渲染事项列表"],
	"删除已完成事项": ["删除已完成事项的数据", "渲染事项列表"],
	"切换所有事项状态": ["切换所有事项状态", "渲染事项列表"]
})