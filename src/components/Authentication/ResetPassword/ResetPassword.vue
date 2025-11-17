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
              <h4 class="fs-20 fw-semibold mb-2">Reset Password</h4>
              <p class="fs-14 text-body">Type your new password</p>
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
                <button type="submit" class="default-btn w-100 d-block">
                  Set Password
                </button>
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
  name: "ResetPassword",
};
</script>