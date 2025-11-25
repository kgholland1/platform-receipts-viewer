import { createWebHashHistory, createRouter, RouterOptions } from "vue-router";

import ReceiptSummaryPage from "../pages/Dashboard/ReceiptSummaryPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ForgetPasswordPage from "../pages/Authentication/ForgetPasswordPage.vue";

import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import ChangePasswordPage from "../pages/Setting/ChangePasswordPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "ReceiptSummaryPage",
    component: ReceiptSummaryPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/receipt-list",
    name: "ReportList",
    component: () => import("../pages/Report/ReportManagementPage.vue")
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: () => import("../pages/Social/ProfilePage.vue")
  },
  {
    path: "/setting",
    name: "SettingPage",
    component: () => import("../pages/Social/SettingPage.vue")
  },
  {
    path: "/faq",
    name: "FaqPage",
    component: () => import("../pages/FaqPage.vue")
  },
  {
    path: "/user-list",
    name: "UsersListPage",
    component: () => import("../pages/Users/UsersListPage.vue")
  },
  {
    path: "/user-profile",
    name: "UserProfilePage",
    component: () => import("../pages/Profile/UserProfilePage.vue")
  },
  {
    path: "/sign-in",
    name: "SignInPage",
    component: SignInPage,
  },
  {
    path: "/reset-password",
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
  },
  {
    path: "/forget-password",
    name: "ForgetPasswordPage",
    component: ForgetPasswordPage,
  },
  {
    path: "/log-out",
    name: "LogOutPage",
    component: LogOutPage,
  },
  {
    path: "/account-settings",
    name: "AccountSettingsPage",
    component: () => import("../pages/Setting/AccountSettingsPage.vue")
  },
  {
    path: "/change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage,
  },
  {
    path: "/account-token",
    name: "APIKeyPage",
    component: () => import("../pages/Setting/APIKeyPage.vue")
  },
  {
    path: "/not-found",
    name: "ErrorPage",
    component: ErrorPage,
  },
   {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found"
  }, 
];

const router = createRouter({
  history: createWebHashHistory(),
  linkExactActiveClass: "active",
  routes: routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
} as RouterOptions);

// Global beforeEach guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("gcr-userId");

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next("/sign-in");
  }

  if (isAuthenticated && to.path === "/sign-in") {
    return next("/");
  }

  next();
});

export default router;
