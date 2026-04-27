import type { NavBarConfig, NavBarLink, NavBarSearchConfig } from "../types/config";
import { LinkPresets } from "../constants/link-presets";

export const navBarConfig: NavBarConfig = {
	// 导航栏链接配置
	links: [
		{
			name: "归档",
			url: "/archive",
			external: false,
		},
		{
			name: "更多",
			url: "#",
			external: false,
			children: [
				{
					name: "画廊",
					url: "https://edit.upxuu.com/s/g",
					external: true,
				},
				{
					name: "状态",
					url: "https://up.upxuu.com/",
					external: true,
				},
				{
					name: "统计",
					url: "https://stats.upxuu.com/share/sFftlqBkgk2z9JM2",
					external: true,
				},
			],
		},
		{
			name: "Q群",
			url: "/q",
			external: false,
		},
		{
			name: "开往",
			url: "https://www.travellings.cn/go.html",
			external: true,
		},
		{
			name: "友链",
			url: "/friends",
			external: false,
		},
		{
			name: "碎碎念",
			url: "/shuoshuo",
			external: false,
		},
		{
			name: "关于",
			url: "/about",
			external: false,
		},
		{
			name: "更新日志",
			url: "/diff",
			external: false,
		},
	],

	// 搜索配置
	search: {
		// 搜索方式：0-内置搜索, 1-Pagefind, 2-本地API, 3-本地服务器
		method: 0,
	},
};
