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
                A email has been send to examplemail@info.com. Please Check for
                an email from company and click on the included link to reset
                your password.
              </p>
              <img
                class="rounded-circle mb-3"
                src="../../../assets/images/email.png"
                alt="email"
              />
              <h4 class="fs-18 fw-semibold mb-2">Success !</h4>
            </div>
            <form>
              <div class="form-group">
                <router-link to="/" class="default-btn w-100 d-block">
                  Back To Home
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
  name: "ConfirmMail",
};
</script>