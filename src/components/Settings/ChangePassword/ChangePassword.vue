<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-4"
          >
            <h3 class="fw-medium fs-18 mb-0">Setting</h3>
          </div>

          <ul class="ps-0 mb-0 list-unstyled user-menu">
            <li class="mb-1">
              <router-link
                to="/account-settings"
                class="fs-14 fw-medium text-body text-decoration-none d-block py-2 px-3"
              >
                Account Settings
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                to="/change-password"
                class="fs-14 fw-medium text-body text-decoration-none d-block py-2 px-3"
              >
                Change Password
              </router-link>
            </li>
            <li class="mb-1">
              <router-link
                to="/connections"
                class="fs-14 fw-medium text-body text-decoration-none d-block py-2 px-3"
              >
                Connections
              </router-link>
            </li>
            <li class="mb-0">
              <router-link
                to="/privacy-policy"
                class="fs-14 fw-medium text-body text-decoration-none d-block py-2 px-3"
              >
                Privacy Policy
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-lg-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Edit Profile</h3>
          </div>

          <div class="mb-4">
            <div class="position-relative">
              <img
                class="w-100 h-400 rounded-top"
                src="../../../assets/images/profile-bg.jpg"
                alt="profile-bg"
              />
              <div
                class="product-upload position-absolute bottom-0 end-0 d-none d-sm-block d-md-block d-lg-block"
                style="right: 10px !important; bottom: 10px !important"
              >
                <label for="file-upload" class="file-upload mb-0">
                  <img
                    src="../../../assets/images/upload-3.svg"
                    alt="upload-3"
                  />
                </label>
                <input id="file-upload" type="file" />
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center p-4">
              <div class="users-profile top-125 d-flex align-items-end ms-0">
                <div class="position-relative">
                  <img
                    class="wh-200 rounded-circle"
                    src="../../../assets/images/profile-img.jpg"
                    alt="profile-img"
                  />
                  <div
                    class="product-upload position-absolute bottom-0 end-0"
                    style="right: 5px !important; bottom: 5px !important"
                  >
                    <label for="file-upload" class="file-upload mb-0">
                      <img
                        src="../../../assets/images/upload-4.svg"
                        alt="upload-4"
                      />
                    </label>
                    <input id="file-upload" type="file" />
                  </div>
                </div>

                <div class="ifno ms-3 mb-2">
                  <h4 class="fs-18 fw-medium">Sutherland Lee</h4>
                  <span class="text-body">lee@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Old Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="************"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">New Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="************"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="************"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="d-flex">
                  <button type="submit" class="default-btn">
                    Update Profile
                  </button>
                  <button type="submit" class="default-btn border-btn ms-3">
                    Cancel Change
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePassword",
};
</script>