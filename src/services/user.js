import baseService from "./lib/baseService";

const path = "user";

let isAdmin = false;

export default {
  getResource: () => {
    baseService.getResource({ path: `${path}/` });
    return isAdmin;
  },
  patchResource: (req) => {
    baseService.patchResource({ path: `${path}/${req.id}`, body: req.body });
  },
  postResource: (req) => {
    baseService.postResource({ path: `${path}/`, body: req.body });
    isAdmin = !isAdmin;
    return isAdmin;
  },
  deleteResource: (req) => {
    baseService.deleteResource({ path: `${path}/${req.path}`, body: req.body });
  },
};
