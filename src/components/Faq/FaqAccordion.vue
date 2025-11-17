<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4 m-2">
      <div class="row justify-content-between">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-5">
              <div class="card-title mb-4">
                <h3 class="fw-medium fs-18 mb-0">Frequently Asked Questions</h3>
              </div>
              <form class="src-form position-relative mb-2">
                <input
                  type="text"
                  class="form-control h-40"
                  style="padding-left: 40px"
                  placeholder="Search here..."
                />
                <vue-feather
                  type="search"
                  class="position-absolute top-50 start-0 translate-middle-y text-body"
                  style="left: 15px !important; width: 18px"
                ></vue-feather>
              </form>
            </div>
          </div>
        </div>
        <div class="faq-accordion-wrap mw-100">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h6 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  01. What does cadastral mapping mean?
                </button>
              </h6>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget
                    malesuada. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Sed porttitor lectus
                    nibh. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempora, nihil! Ex molestiae eaque eius fuga quibusdam
                    quisquam odio tempora quia, vel expedita quae sint, illo
                    consequatur magni commodi rerum quam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi et reprehenderit
                    minima molestiae, iusto ipsa a cupiditate sed, ullam nulla
                    repellat! Voluptate soluta delectus architecto iure, vel
                    magnam odio nostrum.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h6 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  02. What is Site Plan Approval?
                </button>
              </h6>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget
                    malesuada. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Sed porttitor lectus
                    nibh. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempora, nihil! Ex molestiae eaque eius fuga quibusdam
                    quisquam odio tempora quia, vel expedita quae sint, illo
                    consequatur magni commodi rerum quam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi et reprehenderit
                    minima molestiae, iusto ipsa a cupiditate sed, ullam nulla
                    repellat! Voluptate soluta delectus architecto iure, vel
                    magnam odio nostrum.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h6 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  03. What does Property Valuation mean?
                </button>
              </h6>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget
                    malesuada. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Sed porttitor lectus
                    nibh. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempora, nihil! Ex molestiae eaque eius fuga quibusdam
                    quisquam odio tempora quia, vel expedita quae sint, illo
                    consequatur magni commodi rerum quam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi et reprehenderit
                    minima molestiae, iusto ipsa a cupiditate sed, ullam nulla
                    repellat! Voluptate soluta delectus architecto iure, vel
                    magnam odio nostrum.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h6 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  04. What is a Land Use Permit?
                </button>
              </h6>
              <div
                id="collapse4"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget
                    malesuada. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Sed porttitor lectus
                    nibh. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempora, nihil! Ex molestiae eaque eius fuga quibusdam
                    quisquam odio tempora quia, vel expedita quae sint, illo
                    consequatur magni commodi rerum quam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi et reprehenderit
                    minima molestiae, iusto ipsa a cupiditate sed, ullam nulla
                    repellat! Voluptate soluta delectus architecto iure, vel
                    magnam odio nostrum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h6 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  05. What is Boundary Demarcation?
                </button>
              </h6>
              <div
                id="collapse5"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget
                    malesuada. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Sed porttitor lectus
                    nibh. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempora, nihil! Ex molestiae eaque eius fuga quibusdam
                    quisquam odio tempora quia, vel expedita quae sint, illo
                    consequatur magni commodi rerum quam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi et reprehenderit
                    minima molestiae, iusto ipsa a cupiditate sed, ullam nulla
                    repellat! Voluptate soluta delectus architecto iure, vel
                    magnam odio nostrum.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h6 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse6e"
                >
                  06. How is a Land Lease Renewal?
                </button>
              </h6>
              <div
                id="collapse6"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Sed porttitor lectus nibh. Donec rutrum congue leo eget
                    malesuada. Vivamus magna justo, lacinia eget consectetur
                    sed, convallis at tellus. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Sed porttitor lectus
                    nibh. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Tempora, nihil! Ex molestiae eaque eius fuga quibusdam
                    quisquam odio tempora quia, vel expedita quae sint, illo
                    consequatur magni commodi rerum quam. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Eligendi et reprehenderit
                    minima molestiae, iusto ipsa a cupiditate sed, ullam nulla
                    repellat! Voluptate soluta delectus architecto iure, vel
                    magnam odio nostrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FaqAccordion",
};
</script>