const siteTitle = "gatsby-starter-typescript-seo-grand";
const siteDescription =
	"A Gatsby starter with TypeScript, SEO, Styled Components, Prettier, PWA Support, Jest, and more.";
const siteAuthor = "@s_ayanide";
const siteUrl = "";
const siteImage = `${siteUrl}/icons/ms-icon-310x310.png`;
const siteKeywords = [
	"gatsby",
	"typescript",
	"starter",
	"javascript",
	"react",
	"prettier",
	"SEO",
	"eslint",
	"grand",
	"filesystem",
	"helmet",
	"sharp",
	"styled component",
	"axe",
];
module.exports = {
	siteMetadata: {
		title: siteTitle,
		description: siteDescription,
		author: siteAuthor,
		url: siteUrl,
		keywords: siteKeywords,
		image: siteImage,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: "images",
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://www.inspiring-swirles-f32066.netlify.com",
				sitemap:
					"https://www.inspiring-swirles-f32066.netlify.com/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }],
			},
		},
		{
			resolve: "gatsby-plugin-react-axe",
			options: {
				showInProduction: false,
				// Options to pass to axe-core.
				// See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
				axeOptions: {
					// Your axe-core options.
				},
			},
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteTitle,
				short_name: siteTitle,
				description: siteDescription,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: "src/images/icon.png",
				icons: [
					{
						src: "icons/ms-icon-310x310.png",
						sizes: "310x310",
						types: "image/png",
					},
					{
						src: "icons/android-icon-192x192.png",
						sizes: "192x192",
						types: "image/png",
					},
				],
			},
		},
		`gatsby-plugin-offline`,
	],
};
