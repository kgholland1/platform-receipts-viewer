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

          <div class="form-group mb-1">
            <label class="label fs-18 fw-medium mb-3"
              >Who will be able to see your profile?</label
            >

            <div class="d-flex">
              <div class="c-form-check form-check mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault1"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault1"
                  style="position: relative; top: -2px"
                >
                  Only me
                </label>
              </div>
              <div class="c-form-check form-check ms-3 mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault2"
                  style="position: relative; top: -2px"
                >
                  My followers
                </label>
              </div>
              <div class="c-form-check form-check ms-3 mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault3"
                  style="position: relative; top: -2px"
                >
                  Everyone
                </label>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <h4 class="h4 fs-18 fw-medium mb-2">Two factor Authentication</h4>
            <p class="fs-14 text-body">
              Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Curabitur aliquet quam id dui posuere
              blandit. Curabitur aliquet quam id dui posuere blandit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
              lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
              id imperdiet et, porttitor at sem.
            </p>
          </div>
          <div class="mb-4">
            <h4 class="h4 fs-18 fw-medium mb-2">Secondary Verification</h4>
            <p class="fs-14 text-body">
              Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Curabitur aliquet quam id dui posuere
              blandit. Curabitur aliquet quam id dui posuere blandit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
              lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
              id imperdiet et, porttitor at sem.
            </p>
          </div>
          <div class="mb-4">
            <h4 class="h4 fs-18 fw-medium mb-2">Backup Codes</h4>
            <p class="fs-14 text-body">
              Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Curabitur aliquet quam id dui posuere
              blandit. Curabitur aliquet quam id dui posuere blandit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
          </div>
          <div class="mb-4">
            <h4 class="h4 fs-18 fw-medium mb-2">Application Notifications</h4>
            <p class="fs-14 text-body">
              Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Curabitur aliquet quam id dui posuere
              blandit. Curabitur aliquet quam id dui posuere blandit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
              lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
              id imperdiet et, porttitor at sem.
            </p>
          </div>
          <div class="mb-4">
            <h4 class="h4 fs-18 fw-medium mb-2">Delete this Account</h4>
            <p class="fs-14 text-body">
              Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Curabitur aliquet quam id dui posuere
              blandit. Curabitur aliquet quam id dui posuere blandit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis
              lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
              id imperdiet et, porttitor at sem.
            </p>
          </div>
          <div class="d-flex">
            <button class="default-btn btn-outline-danger bg">
              Close & Delete This Account
            </button>
            <button class="default-btn border-btn ms-3">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
};
</script>