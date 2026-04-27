import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	// 当前启用的评论系统类型
	type: "waline",

	waline: {
		// Waline服务器地址
		serverURL: "https://com2.upxuu.com/",
		// 语言
		lang: "zh-CN",
		// 表情配置
		emoji: [
			"https://unpkg.com/@waline/emojis@1.1.0/bilibili",
		],
		// 登录模式
		login: "enable",
		// 访问量统计
		visitorCount: true,
		// 显示反应
		reaction: true,
		// 字数统计
		wordLimit: 0,
		// 每页评论数
		pageSize: 10,
		// 评论框占位符
		placeholder: "欢迎评论",
	},
};
