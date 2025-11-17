<template>
  <div class="h-80vh">
    <div class="d-table">
      <div class="d-table-cell">
        <div
          class="card border-0 box-shadow border-radius-10 mb-4 w-100"
          style="max-width: 500px; margin: auto"
        >
          <div class="card-body p-30">
            <div class="text-center mb-4">
              <h4 class="fs-20 fw-semibold mb-2">Welcome To Vaxo</h4>
              <p class="fs-14 text-body mb-4">
                Enter your password to access the admin
              </p>
              <img
                class="rounded-circle mb-3"
                src="../../../assets/images/screenlook-img.jpg"
                alt="screenlook-img"
              />
              <h4 class="fs-18 fw-medium mb-2">Robert Ellsworth</h4>
            </div>
            <form>
              <div class="form-group mb-4">
                <label class="label">Your Password</label>
                <div class="password-wrapper position-relative">
                  <input
                    type="password"
                    id="password"
                    class="form-control"
                    value="password"
                  />
                  <i
                    style="
                      color: #919aa3;
                      font-size: 16px;
                      right: 15px !important;
                    "
                    class="ri-eye-off-line password-toggle-icon translate-middle-y top-50 end-0 position-absolute"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div class="form-group">
                <router-link
                  to="/"
                  class="default-btn text-white text-decoration-none w-100 d-block text-center"
                >
                  Sign In
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LockScreen",
};
</script>