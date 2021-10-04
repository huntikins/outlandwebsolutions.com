import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					{/* Start of HubSpot Embed Code */}
					<script
						type="text/javascript"
						id="hs-script-loader"
						async
						defer
						src="//js-na1.hs-scripts.com/20809680.js"
					></script>
					{/* End of HubSpot Embed Code */}
				</body>
			</Html>
		)
	}
}

export default MyDocument
