<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Add User</h3>
          </div>

          <div class="mb-4">
            <div class="position-relative">
              <img
                class="w-100 h-400 rounded-2"
                src="../../../assets/images/ad-user-bg.jpg"
                alt="ad-user-bg"
              />
              <div
                class="product-upload position-absolute bottom-0 end-0"
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

            <div class="users-profile d-flex align-items-end">
              <div class="position-relative">
                <img
                  src="../../../assets/images/add-user-profile.png"
                  alt="add-user-profile"
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

          <form>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Address</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Country</label>
                  <select
                    class="form-select form-control"
                    aria-label="Default select example"
                  >
                    <option selected>United States</option>
                    <option value="1">Canada</option>
                    <option value="2">Arabic</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label">Some Info</label>
                  <textarea
                    class="form-control"
                    placeholder="Some demo text..."
                    cols="30"
                    rows="6"
                  ></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label fs-18 fw-medium">Status</label>

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
                      >
                        Active
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
                      >
                        Deactivated
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
                      >
                        Blocked
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Company Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter company name"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Company Website</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="www.example.com"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Department</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Department name"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Designation</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Designation"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mb-4">
                  <label class="label">Hiring Date</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="hiring date"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-4">
                  <label class="label fs-18 fw-medium">Social</label>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Facebook</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="facebook@example.com"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">Twitter</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="twitter@example.com"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">LinkedIn</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="linkedin@example.com"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mb-4">
                  <label class="label">YouTube</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="youtube@example.com"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group mb-0 d-flex justify-content-between">
                  <div class="d-flex">
                    <button type="submit" class="default-btn">
                      Save Information
                    </button>
                    <button type="submit" class="default-btn border-btn ms-3">
                      Cancel Change
                    </button>
                  </div>
                  <button type="submit" class="default-btn border-btn ms-3">
                    + Add Another
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <div
            class="card-title d-flex justify-content-between align-items-center mb-4"
          >
            <h3 class="fw-medium fs-18 mb-0">Privacy</h3>
          </div>

          <ul class="ps-0 mb-4 list-unstyled">
            <li class="mb-3">
              <div class="c-form-check form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault4"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault4"
                >
                  Allow users to show your email
                </label>
              </div>
            </li>
            <li class="mb-3">
              <div class="c-form-check form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault5"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault5"
                >
                  Allow users to show your experiences
                </label>
              </div>
            </li>
            <li>
              <div class="c-form-check form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault6"
                />
                <label
                  class="form-check-label fs-14 text-body"
                  for="flexCheckDefault6"
                >
                  Allow users to show your followers
                </label>
              </div>
            </li>
          </ul>

          <div
            class="card-title d-flex justify-content-between align-items-center mb-3"
          >
            <h3 class="fw-medium fs-18 mb-0">Select Your Skills</h3>
          </div>

          <form>
            <div class="form-group">
              <label class="label">Your Skills</label>
              <select
                class="form-select form-control"
                aria-label="Default select example"
              >
                <option selected>Select skills</option>
                <option value="1">HTML</option>
                <option value="2">WP</option>
                <option value="3">UI/UX</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUser",
};
</script>