import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	avatar: "https://edit.upxuu.com/img/2025/11/29/20251129211702_173.png",
	// 名字
	name: "UpXuu",
	// 个性签名
	bio: "逐光而上！",

	// 社交链接
	links: [
		{
			name: "GitHub",
			url: "https://github.com/ImUpXuu",
			icon: "mdi:github",
			showName: false,
		},
		{
			name: "Bilibili",
			url: "https://space.bilibili.com/3546855124240550",
			icon: "simple-icons:bilibili",
			showName: false,
		},
		{
			name: "Email",
			url: "mailto:me@upxuu.com",
			icon: "mdi:email",
			showName: false,
		},
		{
			name: "QQ",
			url: "/q",
			icon: "simple-icons:tencentqq",
			showName: false,
		},
	],
};
