#NiceFish-Admin
 这是NiceFish的后台管理界面，纯前端，没有任何后端代码。整体基于Angular2和Bootstrap3.3.7，用来示范Angular2在后台管理系统里面的典型使用方法。 
 NiceFish的前端代码在这里：http://git.oschina.net/mumu-osc/NiceFish
 NiceFish的后端Java代码在这里：http://git.oschina.net/mumu-osc/NiceFish-BackEnd
 欢迎一起来玩儿！

## 环境搭建

用git克隆本项目，从命令行进入进入项目根目录，依次执行以下命令：

	npm i -g cnpm
	cnpm i -g @angular/cli
	cnpm install
	ng serve

如果之前装过angular-cli需要先卸载：npm uninstall -g angular-cli
如果之前装过@angular/cli需要先卸载：npm uninstall -g @angular/cli
然后依次执行以下命令：

	npm cache clean
	npm i -g cnpm
	cnpm i -g @angular/cli
	cnpm install
	ng serve

打开你的浏览器，访问http://localhost:4200/

如果你想让加载的包更小，请使用以下方式启动@angular/cli内置的轻量级http server

	ng serve --prod --aot
【注意】如果你发现ng serve起不来，或者起来有报错，请把NiceFish-Admin根目录下的node_modules目录删掉，然后重新执行cnpm install，全局的@angular/cli也需要重装。