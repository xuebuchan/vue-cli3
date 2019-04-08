module.exports = {
	devServer:{
		port:8080,
		proxy:{
			"api":{
				target:"http://cangdu.org:8001",
				changeOrigin:true,
				pathRewrite:{
					"^/api":"/"
				}
			}
		}
	}
}
