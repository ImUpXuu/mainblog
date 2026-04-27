import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: " 公告",
	content: "欢迎来到 UpXuu 的博客！",
	icon: "material-symbols:info",
	type: "info",
	closable: true,
	link: {
		enable: false,
		text: "",
		url: "",
		external: false,
	},
};
