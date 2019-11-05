import Vue from "vue";
import Router from "vue-router";
import Template from "@/views/Template.vue";
import Home from "@/views/pages/Home.vue";
import Quadras from "@/views/pages/Quadras.vue";
import PostDetails from "@/components/PostDetails.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Template,
      children: [
        {
          path: "",
          component: Home
        },
        {
          path: "quadras",
          component: Quadras
        }
      ]
    },
    {
      path: "/post/:postIndex?",
      name: "post",
      component: PostDetails,
      props: true
    }
  ]
  //mode: "history"
});
