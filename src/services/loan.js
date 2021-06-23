import baseService from "./lib/baseService";

const path = "loan";
const loans = [];
let id = 0;
export default {
  getResource: () => {
    baseService.getResource({ path: `${path}/` }); //-API Call
    return loans;
  },
  patchResource: (req) => {
    baseService.patchResource({ path: `${path}/${req.id}`, body: req.body }); //-API Call
    let index = loans.findIndex((loan) => loan.id == req.id);
    loans[index] = { ...loans[index], ...req.body };
    return loans;
  },
  postResource: (req) => {
    baseService.postResource({ path: `${path}/`, body: req.body }); //-API Call
    req.body.id = id++;
    loans.unshift(req.body);
    return loans;
  },
  deleteResource: (req) => {
    baseService.deleteResource({ path: `${path}/${req.path}`, body: req.body }); //-API Call
  },
};
