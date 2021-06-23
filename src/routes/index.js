import card from "@/views/card/Index.vue";
import credit from "@/views/credit/Index.vue";
import payment from "@/views/payment/Index.vue";
import settings from "@/views/settings/Index.vue";

const routes = [
  { path: "/", component: payment },
  { path: "/card", component: card },
  { path: "/credit", component: credit },
  { path: "/payment", component: payment },
  { path: "/settings", component: settings },
];

export default routes;
