import type { MusicPlayerConfig } from "../types/config";

export const musicConfig: MusicPlayerConfig = {
	mode: "meting",
	volume: 0.5,
	playMode: "list",
	showLyrics: true,
	showInNavbar: false,
	meting: {
		api: "https://api.injahow.cn/meting/",
		server: "netease",
		type: "playlist",
		id: "",
	},
};
