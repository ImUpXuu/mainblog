import type { SidebarLayoutConfig } from "../types/config";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 启用侧边栏
	enable: true,

	// 侧边栏位置：'left' | 'right' | 'both'
	position: "both",

	// 平板端侧边栏显示位置
	tabletSidebar: "left",

	// 文章页面显示双侧边栏
	showBothSidebarsOnPostPage: false,

	// 左侧栏组件配置
	leftComponents: [
		{
			type: "profile",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "announcement",
			enable: false,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "calendar",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "stats",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "advertisement",
			enable: false,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
	],

	// 右侧栏组件配置
	rightComponents: [
		{
			type: "sidebarToc",
			enable: true,
			position: "sticky",
			showOnPostPage: true,
			showOnNonPostPage: false,
		},
		{
			type: "music",
			enable: false,
			position: "sticky",
			showOnPostPage: false,
			showOnNonPostPage: false,
		},
	],

	// 移动端底部组件（通常为空）
	mobileBottomComponents: [],
};
