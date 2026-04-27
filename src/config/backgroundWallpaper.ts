import type { BackgroundWallpaperConfig } from "../types/config";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	// 壁纸模式：banner横幅模式、overlay全屏透明覆盖模式或none纯色背景
	mode: "overlay",
	// 是否允许用户通过导航栏切换壁纸模式
	switchable: false,
	// 壁纸图片地址
	src: {
		desktop: ["/src/assets/images/background.png"],
		mobile: ["/src/assets/images/background.png"],
	},
	// 全屏透明覆盖模式特有配置
	overlay: {
		switchable: false,
		zIndex: -1,
		opacity: 0.78,
		blur: 0,
		cardOpacity: 1,
	},
};
