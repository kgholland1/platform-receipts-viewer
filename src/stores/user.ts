import { ref } from "vue";
import { defineStore } from "pinia";
import { authApi } from "@/plugins/axios";
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import type { ApiResult } from "@/types/auth";
import type {
  User,
  AddUser,
  UserProfile,
  UserChangePassword,
} from "@/types/user";

export const useUserStore = defineStore("user", () => {
  const error = ref<Error | string[] | string | null>(null);
  const users = ref<User[]>([]);
  const profile = ref<UserProfile | null>(null);

  const loadUsers = async (): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.get(`/api/users/agencyUsers`, {
        showLoader: true,
      } as CustomAxiosRequestConfig);

      if (response.status === 200) {
        users.value = response.data;
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error ? err : new Error("Failed to load users");
      console.log(err);
      return { success: false };
    }
  };

  const addNewUser = async (newUserDetails: AddUser): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.post(
        "/api/auth/platform/register-user",
        newUserDetails,
        {
          showLoader: true,
        } as CustomAxiosRequestConfig
      );

      if (response.status === 201) {
        const user: User = response.data;
        user.roles = ["admin"];

        users.value.push(user);
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      if (Array.isArray(err)) {
        error.value = err;
        return { success: false };
      }

      error.value =
        err instanceof Error ? err : new Error("Failed to add user");
      return { success: false };
    }
  };

  const deleteUser = async (userToDelete: User): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.delete(
        `/api/users/${userToDelete.email}`,
        {
          showLoader: true,
        } as CustomAxiosRequestConfig
      );

      if (response.status === 204) {
        const userIndex = users.value.findIndex(
          (u) => u.id === userToDelete.id
        );

        if (userIndex !== -1) {
          users.value.splice(userIndex, 1);
        }
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error ? err : new Error("Failed to delete user");
      return { success: false };
    }
  };

  const fetchProfile = async (): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.get(`/api/users/profile`, {
        showLoader: true,
      } as CustomAxiosRequestConfig);

      if (response.status === 200) {
        profile.value = response.data;
        return { success: true };
      }
      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error
          ? err
          : new Error("Failed to fetch profile details");
      console.log(err);
      return { success: false };
    }
  };

  const changePassword = async (
    newPasswordDetails: UserChangePassword
  ): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.post(
        "/api/users/changePassword",
        newPasswordDetails,
        {
          showLoader: true,
        } as CustomAxiosRequestConfig
      );

      if (response.status === 204) {
        return { success: true };
      }

      return { success: false };
    } catch (err) {
      error.value =
        err instanceof Error ? err : "Failed to change the password";
      console.log("ERROR***", error.value)
      return { success: false };
    }
  };

  return {
    error,
    users,
    profile,
    loadUsers,
    addNewUser,
    deleteUser,
    fetchProfile,
    changePassword,
  };
});
