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
              <h4 class="fs-20 fw-semibold mb-2">E-GCR Portal</h4>
                <div
                  class="d-flex justify-content-center align-items-center cw-293" style="margin-left: 80px;"
                >
                    <div class="flex-shrink-0">
                      <img
                        style="width: 50px; height: 50px; text-align: right;"
                        src="@/assets/images/coatarms.svg"
                        alt="logo"
                      />
                    </div>
                    <div class="lc-wordmark" role="img" aria-label="Contoller and Account General">
                      <span class="lc-line1">
                        <span class="lc-primary">e-</span>
                        <span class="lc-accent">GCR PORTAL</span>
                      </span>
                      <span class="lc-line2">THE CONTROLLER AND ACCOUNTANT GENERAL</span>
                    </div>
                </div>
              <h4 class="fs-18 fw-semibold mb-2">You Are Logged out</h4>
            </div>
            <form>
              <div class="form-group">
                <router-link
                  to="/"
                  class="default-btn w-100 d-block text-center text-white text-decoration-none"
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

<script lang="ts">
export default {
  name: "LogOut",
};
</script>
<style>
  /* Container: fixed brand-mark box */
  .lc-wordmark{
    width:280px; height:50px;
    display:flex; flex-direction:column; justify-content:center;
    gap:6px; /* space between lines */
    overflow:hidden; /* ensure max size */
    color: #1a1a1a; /* inherits well; change to match your theme */
  }

  .lc-wordmark {
    display: flex;
    flex-direction: column;
    justify-content: center; /* vertically centers the text */
    margin-left: 10px; /* spacing from the logo */
    text-align: left;
 }

  /* Line 1: bold, compact, with subtle accent */
  .lc-line1{
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
    line-height:1; letter-spacing:0.8px; white-space:nowrap;
    font-weight:800; font-size:16px; /* tuned to fit 150×50 */
    color: green;
    text-transform:uppercase;
  }
  .lc-primary{ opacity:.92; }
  .lc-accent{
    margin-left:6px;
    background:linear-gradient(20deg, currentColor 0%, rgba(0,128,0,.85) 100%);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    color: green;
  }

  /* Line 2: small, tracked out for legibility */
  .lc-line2{
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif;
    font-weight:700; text-transform:uppercase;
    line-height:1.05; letter-spacing:1.1px;
    font-size:7px; /* long subtitle tuned to fit width */
    opacity:.85;
    color: green;
  }

  /* Optional: adapts nicely on dark backgrounds */
  @media (prefers-color-scheme: dark){
    .lc-wordmark{ color:#f1f1f1; }
  }
</style>