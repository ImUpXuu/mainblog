import { DARK_MODE } from "../constants/constants";
import type { SiteConfig } from "../types/config";
import { navBarConfig } from "./navBarConfig";

export const siteConfig: SiteConfig = {
	// 站点标题与副标题
	title: "UpXuu's Blog",
	subtitle: "逐光而上！",
	site_url: "https://upxuu.com", // 站点 URL
	description: " UpXuu's Blog 一个学生的日常生活~",
	keywords: ["UpXuu", "博客", "技术", "生活", "分享"], // 站点关键词

	// 站点语言
	lang: "zh_CN",

	// 站点主题色
	themeColor: {
		hue: 210,
		fixed: false,
		defaultMode: DARK_MODE, // 默认深色模式
	},

	// 页面整体宽度（单位：rem）
	pageWidth: 75,

	// 卡片样式配置
	card: {
		border: true, // 开启卡片边框和阴影立体效果
		followTheme: false, // 卡片风格不跟随主题色相
	},

	// 字体配置
	font: {
		enable: false,
		selected: "none",
		fonts: {},
	},

	// 站点开始日期
	siteStartDate: "2025-07-20", // 格式: "YYYY-MM-DD"

	// 站点时区
	timezone: "Asia/Shanghai",

	// 提醒框配置
	rehypeCallouts: {
		theme: "github",
	},

	// 生成 OG 图片
	generateOgImages: true,

	// Favicon 配置
	favicon: [
		{
			src: "/favicon/light-32.png",
			theme: "light",
			sizes: "32x32",
		},
		{
			src: "/favicon/light-180.png",
			theme: "light",
			sizes: "180x180",
		},
		{
			src: "/favicon/light-192.png",
			theme: "light",
			sizes: "192x192",
		},
		{
			src: "/favicon/dark-32.png",
			theme: "dark",
			sizes: "32x32",
		},
		{
			src: "/favicon/dark-180.png",
			theme: "dark",
			sizes: "180x180",
		},
		{
			src: "/favicon/dark-192.png",
			theme: "dark",
			sizes: "192x192",
		},
	],

	// 导航栏配置
	navbar: {
		logo: {
			type: "icon",
			value: "material-symbols:home-outline-rounded",
			alt: "UpXuu's Blog",
		},
		title: "UpXuu's Blog",
		widthFull: false,
		menuAlign: "center",
		followTheme: false,
		stickyNavbar: false,
	},

	// 控制"上次编辑"卡片显示
	showLastModified: true,
	outdatedThreshold: 7,
	sharePoster: true,

	// 页面开关配置
	pages: {
		friends: true,
		sponsor: false,
		guestbook: false,
		bangumi: false,
		gallery: false,
	},

	// 分类导航栏
	categoryBar: false,

	// 文章列表布局配置
	postListLayout: {
		defaultMode: "grid",
		mobileDefaultMode: "list",
		showTags: true,
		descriptionLines: 2,
		allowSwitch: true,
		grid: {
			masonry: true,
			columnWidth: 320,
		},
	},

	// 分页配置
	pagination: {
		postsPerPage: 8,
	},

	// Umami 统计分析
	analytics: {
		umamiAnalytics: {
			websiteId: "d1e3b998-2c01-436c-922e-c3534be52a1e",
			scriptUrl: "https://umami.upxuu.com/script.js",
			trackOutboundLinks: true,
			collectWebVitals: false,
		},
	},

	// 图片优化配置
	imageOptimization: {
		formats: "webp",
		quality: 70,
		noReferrerDomains: [],
	},

	// 导航栏链接
	links: navBarConfig.links,
};
