import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "@/stores/auth";
import { useLoaderStore } from "@/stores/loader";
import Swal from "sweetalert2";
import type { Router } from "vue-router";

const showErrorToast = (title: string) => {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "error",
    title,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  });
};

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  showLoader?: boolean;
  skipAuthRedirect?: boolean;
  responseType?: InternalAxiosRequestConfig["responseType"];
}

let routerInstance: Router | null = null;

export const setRouter = (router: Router) => {
  routerInstance = router;
};

// Helper function to create configured instance
const createAxiosInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  });

  // Add request interceptor
  instance.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
      const loaderStore = useLoaderStore();
      const authStore = useAuthStore();

      if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
      }
      if (config.showLoader !== false) {
        loaderStore.startRequest();
      }
      return config;
    },
    (error) => {
      const loaderStore = useLoaderStore();
      loaderStore.endRequest();
      return Promise.reject(error);
    }
  );

  // Add response interceptor
  instance.interceptors.response.use(
    (response) => {
      const loaderStore = useLoaderStore();
      if ((response.config as CustomAxiosRequestConfig).showLoader !== false) {
        loaderStore.endRequest();
      }
      return response;
    },
    (error) => {
      const loaderStore = useLoaderStore();
      const authStore = useAuthStore();

      if ((error.config as CustomAxiosRequestConfig)?.showLoader !== false) {
        loaderStore.endRequest();
      }

      switch (error.status) {
        case 400:
          if (error.response.data) {
            const modelStateErrors = [];
            for (const item of error.response.data) {
              if (item) {
                modelStateErrors.push(item?.description);
              }
            }
            throw modelStateErrors.flat();
          } else {
            showErrorToast(`${error.error}`)
          }
          break;
        case 401:
          authStore.clearToken();
          if (!(error.config as CustomAxiosRequestConfig)?.skipAuthRedirect) {
            routerInstance?.push("/");
          }
          break;
        case 404:
          routerInstance?.push("/not-found");
          break;
        case 500:
          showErrorToast(`${error.error}`)
          break;
        default:
          showErrorToast(`Connection issue detected. Please verify your internet connection.`)
          break;
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const authApi = createAxiosInstance("http://localhost:51044");
export const mdaApi = createAxiosInstance("http://localhost:51045");

export default authApi;
