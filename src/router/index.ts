import { createWebHashHistory, createRouter, RouterOptions } from "vue-router";

import ReceiptSummaryPage from "../pages/Dashboard/ReceiptSummaryPage.vue";
import ReportManagementPage from "../pages/Report/ReportManagementPage.vue";
import ProfilePage from "../pages/Social/ProfilePage.vue";
import SettingPage from "../pages/Social/SettingPage.vue";

import FaqPage from "../pages/FaqPage.vue";
import UsersListPage from "../pages/Users/UsersListPage.vue";
import AddUserPage from "../pages/Users/AddUserPage.vue";
import UserProfilePage from "../pages/Profile/UserProfilePage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ForgetPasswordPage from "../pages/Authentication/ForgetPasswordPage.vue";

import LogOutPage from "../pages/Authentication/LogOutPage.vue";
import AccountSettingsPage from "../pages/Setting/AccountSettingsPage.vue";
import ChangePasswordPage from "../pages/Setting/ChangePasswordPage.vue";


const routes = [
  {
    path: "/",
    name: "ReceiptSummaryPage",
    component: ReceiptSummaryPage,
    meta: { requiresAuth: true }
  },
  {
    path: "/receipt-list",
    name: "ReportList",
    component: ReportManagementPage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/setting",
    name: "SettingPage",
    component: SettingPage,
  },
  {
    path: "/faq",
    name: "FaqPage",
    component: FaqPage,
  },
  {
    path: "/user-list",
    name: "UsersListPage",
    component: UsersListPage,
  },
  {
    path: "/add-user",
    name: "AddUserPage",
    component: AddUserPage,
  },
  {
    path: "/user-profile",
    name: "UserProfilePage",
    component: UserProfilePage,
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
    component: AccountSettingsPage,
  },
  {
    path: "/change-password",
    name: "ChangePasswordPage",
    component: ChangePasswordPage,
  }
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
  const isAuthenticated = !!localStorage.getItem("gcr-userId")

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next("/sign-in")
  }

  if (isAuthenticated && to.path === "/sign-in") {
    return next("/")
  }

  next()
})

export default router;