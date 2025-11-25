import { defineStore } from "pinia";
import { ref } from "vue";
import type {
  ApiResult,
  UserCredentials,
  Profile,
  UserAgency,
} from "@/types/auth";
import type { CustomAxiosRequestConfig } from "@/plugins/axios";
import { authApi } from "@/plugins/axios";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string | null>(null);
  const isAuthenticated = ref<boolean>(false);
  const headerProfile = ref<Profile>({ fullName: "", role: "Admin" });
  const error = ref<string | null>(null);
  const userAgency = ref<UserAgency | null>(null);

  const initAuth = () => {
    const storedToken = localStorage.getItem("gcr-token");
    const storedAuth = localStorage.getItem("gcr-userId");
    const storedProfile = localStorage.getItem("gcr-profile");
    const storedAgency = localStorage.getItem("gcr-agency");

    if (storedToken && storedAuth && storedProfile && storedAgency) {
      token.value = storedToken;
      isAuthenticated.value = JSON.parse(storedAuth);
      headerProfile.value = JSON.parse(storedProfile) as Profile;
      userAgency.value = JSON.parse(storedAgency) as UserAgency;
    }
  };

  const setToken = (newToken: string) => {
    token.value = newToken;
    isAuthenticated.value = true;
    localStorage.setItem("gcr-token", newToken);
    localStorage.setItem("gcr-userId", JSON.stringify(true));
    localStorage.setItem("gcr-profile", JSON.stringify(headerProfile.value));
    localStorage.setItem("gcr-agency", JSON.stringify(userAgency.value));
  };

  const clearToken = () => {
    token.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem("gcr-token");
    localStorage.removeItem("gcr-userId");
    localStorage.removeItem("gcr-profile");
    localStorage.removeItem("gcr-agency");
  };

  const signIn = async (loginDetails: UserCredentials): Promise<ApiResult> => {
    try {
      error.value = null;
      const response = await authApi.post(
        "/api/auth/clientlogin",
        loginDetails,
        {
          showLoader: false,
          skipAuthRedirect: true,
        } as CustomAxiosRequestConfig
      );

      if (response.status === 200) {
        headerProfile.value.fullName = response.data.user.fullName;
        headerProfile.value.role = response.data.user.role[0];
        userAgency.value = response.data.agency;
        setToken(response.data.token);

        return { success: true };
      }
      return { success: false };
    } catch {
      // Handled by inteceptor
      error.value = "Incorrect Email or Password";
      console.log("error");
      return { success: false };
    }
  };

  return {
    token,
    isAuthenticated,
    headerProfile,
    userAgency,
    error,
    initAuth,
    setToken,
    clearToken,
    signIn,
  };
});
