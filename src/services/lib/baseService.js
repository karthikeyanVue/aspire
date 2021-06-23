import fetchResource from "./api-wrapper";

const getResource = (req) => {
  fetchResource(req.path, { type: "GET" });
};

const patchResource = (req) => {
  fetchResource(req.path, { type: "PATCH", body: req.body });
};

const postResource = (req) => {
  fetchResource(req.path, { type: "POST", body: req.body });
};

const deleteResource = (req) => {
  fetchResource(req.path, { type: "DELETE" });
};

export default { getResource, patchResource, postResource, deleteResource };
