<template>
  <div class="d-table">
    <div class="d-table-cell">
      <div
        class="card border-0 box-shadow border-radius-10 mb-4 w-100"
        style="max-width: 500px; margin: auto"
      >
        <div class="card-body p-30">
          <div class="text-center mb-4">
            <h4 class="fs-20 fw-semibold mb-2">Sign Up</h4>
            <p class="fs-14 text-body">
              Already have an account?
              <router-link
                to="/sign-in"
                class="text-primary text-decoration-none"
              >
                Sign In
              </router-link>
            </p>
          </div>
          <form>
            <div class="form-group mb-4">
              <label class="label">Your Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label">Email Address</label>
              <input
                type="text"
                class="form-control"
                placeholder="example@gmail.com"
              />
            </div>
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
            <div class="form-group mb-4">
              <label class="label">Confirm Password</label>
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
            <div class="form-group mb-4">
              <div class="c-form-check form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label fs-14 text-body ms-0"
                  for="flexCheckDefault"
                >
                  I accept the
                  <a href="#" class="text-decoration-none text-primary"
                    >Terms and Conditions</a
                  >
                </label>
              </div>
            </div>
            <div class="form-group mb-4">
              <button type="submit" class="default-btn w-100 d-block">
                Sign Up
              </button>
            </div>
            <div class="form-group mb-4">
              <span class="or text-center d-block"
                ><span class="fs-18 fw-medium text-dark">OR</span></span
              >
            </div>
            <div class="form-group mb-0">
              <button
                type="submit"
                class="default-btn w-100 d-block"
                style="background-color: #dd4b39"
              >
                <i class="ri-google-fill"></i> Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>