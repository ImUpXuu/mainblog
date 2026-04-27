export type LinkPreset = 'Home' | 'About' | 'Archive' | 'Friends' | 'Sponsor' | 'Guestbook' | 'Bangumi' | 'Gallery';

export interface NavBarLink {
	name: string;
	url: string;
	external?: boolean;
	icon?: string;
}

export const LinkPresets: Record<LinkPreset, NavBarLink> = {
	Home: {
		name: "首页",
		url: "/",
	},
	About: {
		name: "关于",
		url: "/about/",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
	},
	Sponsor: {
		name: "赞助",
		url: "/sponsor/",
	},
	Guestbook: {
		name: "留言板",
		url: "/guestbook/",
	},
	Bangumi: {
		name: "番组",
		url: "/bangumi/",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
	},
};
