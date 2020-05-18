import Router from "./scripts/router";
import RouterStatic from "./scripts/routerStatic";
import Store from "./scripts/store";

export default myRuntimePublicPath => {
  __webpack_public_path__ = myRuntimePublicPath;
  return {
    router: Router,
    routerStatic: RouterStatic,
    store: Store
  };
};
