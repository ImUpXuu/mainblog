import type { CoverImageConfig } from "../types/config";

export const coverImageConfig: CoverImageConfig = {
	enableInPost: false,
	randomCoverImage: {
		enable: false,
		apis: [],
		fallback: "",
		showLoading: true,
	},
};
