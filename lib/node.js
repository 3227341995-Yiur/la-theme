import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
// src/node.ts
/**
* 主题插件 Node half：只负责把 client bundle 登记到宿主。
* 主题本身是纯前端行为，不读写本地文件。
*/
var name = "la-theme";
var inject = ["clientModules"];
function apply(ctx) {
	ctx.clientModules.register({
		id: name,
		package: name,
		file: join(dirname(fileURLToPath(import.meta.url)), "client.js"),
		url: `/client/${encodeURIComponent(name)}/index.js`
	});
}
var node_default = {
	name,
	inject,
	apply
};
export { apply, node_default as default, inject, name };
