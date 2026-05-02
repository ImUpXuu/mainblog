import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: (NavBarLink | LinkPreset)[] = [
		// 归档
		LinkPreset.Archive,
	];

	// 根据配置决定是否添加友链
	if (siteConfig.pages.friends) {
		links.push(LinkPreset.Friends);
	}

	// Q群
	links.push({
		name: "Q群",
		url: "/q",
		icon: "fa7-brands:qq",
	});

	// 开往
	links.push({
		name: "开往",
		url: "https://www.travellings.cn/go.html",
		external: true,
		icon: "material-symbols:train",
	});

	// 碎碎念
	links.push({
		name: "碎碎念",
		url: "/shuoshuo",
		icon: "fa7-solid:note-sticky",
	});

	// 更多菜单
	links.push({
		name: "更多",
		url: "/more/",
		icon: "fa7-solid:ellipsis",
		children: [
			{
				name: "画廊",
				url: "https://edit.upxuu.com/s/g",
				external: true,
				icon: "fa7-solid:images",
			},
			{
				name: "状态",
				url: "https://up.upxuu.com/",
				external: true,
				icon: "fa7-solid:chart-line",
			},
			{
				name: "统计",
				url: "https://stats.upxuu.com/share/sFftlqBkgk2z9JM2",
				external: true,
				icon: "fa7-solid:chart-simple",
			},
		],
	});

	// 关于
	links.push({
		name: "关于",
		url: "/about/",
		icon: "material-symbols:info",
		children: [
			...(siteConfig.pages.guestbook ? [LinkPreset.Guestbook] : []),
			...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []),
			LinkPreset.About,
		],
	});

	// 我的菜单
	links.push({
		name: "我的",
		url: "/my/",
		icon: "material-symbols:person",
		children: [
			...(siteConfig.pages.gallery ? [LinkPreset.Gallery] : []),
			...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []),
		],
	});

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
