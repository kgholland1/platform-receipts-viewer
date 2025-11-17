<template>
  <div id="SidebarLightMode" class="sidebar-area">
    <div
      id="accordionExample"
      class="layout-menu menu-vertical menu bg-menu-theme scroll-bar active hv-100"
    >
      <div class="menu-inner-shadow"></div>

      <ul class="menu-inner">
        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <vue-feather
              type="grid"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Dashboard</span>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="/report-list" class="menu-link">
            <vue-feather
            type="clipboard"
            class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Query Builder</span>
          </router-link>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse8"
            aria-expanded="false"
            aria-controls="collapse8"
          >
            <vue-feather type="user" class="menu-icon tf-icons"></vue-feather>
            <span class="title">Users</span>
          </a>
          <ul
            id="collapse8"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/user-list" class="menu-link">
                User List
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/add-user" class="menu-link">
                Add User
              </router-link>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapse17"
            aria-expanded="false"
            aria-controls="collapse17"
          >
            <vue-feather
              type="settings"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Setting</span>
          </a>
          <ul
            id="collapse17"
            class="menu-sub collapse"
            data-bs-parent="#accordionExample"
          >
            <li class="menu-item">
              <router-link to="/account-settings" class="menu-link">
                Account Settings
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/change-password" class="menu-link">
                Change Password
              </router-link>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <router-link to="/faq" class="menu-link">
            <vue-feather
              type="help-circle"
              class="menu-icon tf-icons"
            ></vue-feather>
            <span class="title">Dev</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "MainSidebar",
};
</script>