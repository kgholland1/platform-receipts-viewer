<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-0">
      <div class="position-relative">
        <img
          class="w-100 h-400"
          src="../../../assets/images/profile-bg.jpg"
          alt="ad-user-bg-2"
        />
        <div
          class="product-upload position-absolute bottom-0 end-0 d-none d-sm-block d-md-block d-lg-block"
          style="right: 10px !important; bottom: 10px !important"
        >
          <label for="file-upload" class="file-upload mb-0">
            <img src="../../../assets/images/upload-3.svg" alt="upload-3" />
          </label>
          <input id="file-upload" type="file" />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center p-4">
        <div class="users-profile top-125 d-flex align-items-end ms-0">
          <div class="position-relative">
            <img
              class="wh-200 rounded-circle"
              src="../../../assets/images/add-user-profile-2.jpg"
              alt="add-user-profile-2"
            />
            <div
              class="product-upload position-absolute bottom-0 end-0"
              style="right: 5px !important; bottom: 5px !important"
            >
              <label for="file-upload" class="file-upload mb-0">
                <img src="../../../assets/images/upload-4.svg" alt="upload-4" />
              </label>
              <input id="file-upload" type="file" />
            </div>
          </div>

          <div class="ifno ms-3 mb-2">
            <h4 class="fs-18 fw-medium">Sutherland Lee</h4>
            <span class="text-body">lee@gmail.com</span>
          </div>
        </div>

        <a
          href="#"
          class="default-btn border-btn text-decoration-none d-none d-lg-block d-md-block d-sm-block"
          >Share Profile</a
        >
      </div>
    </div>
  </div>

  <ul class="nav nav-tabs border-0 mb-4 user-tabs" id="myTab" role="tablist">
    <li class="nav-item border-0" role="presentation">
      <button
        class="nav-link border-0 rounded-0 fs-14"
        id="profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#profile-tab-pane"
        type="button"
        role="tab"
        aria-controls="profile-tab-pane"
        aria-selected="true"
      >
        Profile
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-0 rounded-0 fs-14"
        id="teams-tab"
        data-bs-toggle="tab"
        data-bs-target="#teams-tab-pane"
        type="button"
        role="tab"
        aria-controls="teams-tab-pane"
        aria-selected="false"
      >
        Teams
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link border-0 rounded-0 fs-14 active"
        id="projects-tab"
        data-bs-toggle="tab"
        data-bs-target="#projects-tab-pane"
        type="button"
        role="tab"
        aria-controls="projects-tab-pane"
        aria-selected="false"
      >
        Projects
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabindex="0"
    >
      <div class="row">
        <div class="col-xxl-3">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <h4 class="fs-18 fw-medium mb-3">User Bio</h4>
              <p class="mb-4 fs-14 text-body">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Donec sollicitudin molestie malesuada. Pellentesque in
                ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget
                consectetur sed, convallis at tellus. Vestibulum ac diam sit
                amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>

              <h4 class="fs-18 fw-medium mb-3">Contact Info</h4>
              <ul class="ps-0 mb-4 list-unstyled">
                <li class="fs-14 text-body mb-2">
                  <span class="text-dark">Name:</span> Sutherland Lee
                </li>
                <li class="fs-14 text-body mb-2">
                  <span class="text-dark">Email:</span> lee@gmail.com
                </li>
                <li class="fs-14 text-body mb-2">
                  <span class="text-dark">Phone:</span> +1 444 222 4433
                </li>
                <li class="fs-14 text-body mb-2">
                  <span class="text-dark">Web:</span> www.example.com
                </li>
                <li class="fs-14 text-body mb-2">
                  <span class="text-dark">Address:</span> 84 S. Arrowhead Court
                  Branford, WL 80680
                </li>
              </ul>

              <h4 class="fs-18 fw-medium mb-4">Social Profiles:</h4>
              <ul class="ps-0 mb-0 list-unstyled d-flex">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    class="default-btn text-decoration-none border-btn px-3 d-inline-block"
                    target="_blank"
                  >
                    <vue-feather
                      type="facebook"
                      style="width: 20"
                    ></vue-feather>
                  </a>
                </li>
                <li class="ms-2">
                  <a
                    href="https://www.twitter.com/"
                    class="default-btn text-decoration-none border-btn px-3 d-inline-block"
                    target="_blank"
                  >
                    <vue-feather type="twitter" style="width: 20"></vue-feather>
                  </a>
                </li>
                <li class="ms-2">
                  <a
                    href="https://www.linkedin.com/"
                    class="default-btn text-decoration-none border-btn px-3 d-inline-block"
                    target="_blank"
                  >
                    <vue-feather
                      type="linkedin"
                      style="width: 20"
                    ></vue-feather>
                  </a>
                </li>
                <li class="ms-2">
                  <a
                    href="https://www.mail.com/"
                    class="default-btn text-decoration-none border-btn px-3 d-inline-block"
                    target="_blank"
                  >
                    <vue-feather type="mail" style="width: 20"></vue-feather>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-xxl-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="card-title d-flex justify-content-between align-items-center mb-3"
              >
                <h3 class="fw-medium fs-18 mb-0">Recent Activity</h3>
                <ul
                  class="ps-0 mb-0 list-unstyled d-flex week-list nav nav-pills"
                  id="pills-tab3"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link text-body rounded-0 active"
                      id="pills-this-week1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-this-week1"
                      type="button"
                      role="tab"
                      aria-controls="pills-this-week1"
                      aria-selected="true"
                    >
                      This Week
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link text-body rounded-0"
                      id="pills-last-week1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-last-week1"
                      type="button"
                      role="tab"
                      aria-controls="pills-last-week1"
                      aria-selected="true"
                    >
                      Last Week
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link text-body rounded-0"
                      id="pills-last-month1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-last-month1"
                      type="button"
                      role="tab"
                      aria-controls="pills-last-month1"
                      aria-selected="true"
                    >
                      Last Month
                    </button>
                  </li>
                </ul>
              </div>

              <div class="tab-content scroll-bar h-387" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-this-week1"
                  role="tabpanel"
                  aria-labelledby="pills-this-week1-tab"
                  tabindex="0"
                >
                  <ul class="activity-list ps-0 mb-0 list-unstyled">
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">20 Feb, 2023</span>
                        <span class="text-dark">20 min ago</span>
                      </div>
                      <p class="fs-14">
                        Assigned as director of project nursery management
                        system
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">20 Feb, 2023</span>
                        <span class="text-dark">50 min ago</span>
                      </div>
                      <p class="fs-14">
                        Awaiting review from client after project update
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">19 Feb, 2023</span>
                        <span class="text-dark">1 day ago</span>
                      </div>
                      <p class="fs-14">
                        Estimate the full budget of the project and take
                        customer feedback
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">19 Feb, 2023</span>
                        <span class="text-dark">2 day ago</span>
                      </div>
                      <p class="fs-14">
                        How many days to wait to get the refund of the project
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">16 Feb, 2023</span>
                        <span class="text-dark">4 day ago</span>
                      </div>
                      <p class="fs-14">
                        Discuss with the customer what kind of benefits will be
                        provided in a project
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">14 Feb, 2023</span>
                        <span class="text-dark">6 day ago</span>
                      </div>
                      <p class="fs-14">
                        Archived all the files for the construction project
                        monitoring
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-last-week1"
                  role="tabpanel"
                  aria-labelledby="pills-last-week1-tab"
                  tabindex="0"
                >
                  <ul class="activity-list ps-0 mb-0 list-unstyled">
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">20 Feb, 2023</span>
                        <span class="text-dark">20 min ago</span>
                      </div>
                      <p class="fs-14">
                        Assigned as director of project nursery management
                        system
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">20 Feb, 2023</span>
                        <span class="text-dark">50 min ago</span>
                      </div>
                      <p class="fs-14">
                        Awaiting review from client after project update
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">19 Feb, 2023</span>
                        <span class="text-dark">1 day ago</span>
                      </div>
                      <p class="fs-14">
                        Estimate the full budget of the project and take
                        customer feedback
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">19 Feb, 2023</span>
                        <span class="text-dark">2 day ago</span>
                      </div>
                      <p class="fs-14">
                        How many days to wait to get the refund of the project
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">16 Feb, 2023</span>
                        <span class="text-dark">4 day ago</span>
                      </div>
                      <p class="fs-14">
                        Discuss with the customer what kind of benefits will be
                        provided in a project
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">14 Feb, 2023</span>
                        <span class="text-dark">6 day ago</span>
                      </div>
                      <p class="fs-14">
                        Archived all the files for the construction project
                        monitoring
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-last-month1"
                  role="tabpanel"
                  aria-labelledby="pills-last-month1-tab"
                  tabindex="0"
                >
                  <ul class="activity-list ps-0 mb-0 list-unstyled">
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">20 Feb, 2023</span>
                        <span class="text-dark">20 min ago</span>
                      </div>
                      <p class="fs-14">
                        Assigned as director of project nursery management
                        system
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">20 Feb, 2023</span>
                        <span class="text-dark">50 min ago</span>
                      </div>
                      <p class="fs-14">
                        Awaiting review from client after project update
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">19 Feb, 2023</span>
                        <span class="text-dark">1 day ago</span>
                      </div>
                      <p class="fs-14">
                        Estimate the full budget of the project and take
                        customer feedback
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">19 Feb, 2023</span>
                        <span class="text-dark">2 day ago</span>
                      </div>
                      <p class="fs-14">
                        How many days to wait to get the refund of the project
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">16 Feb, 2023</span>
                        <span class="text-dark">4 day ago</span>
                      </div>
                      <p class="fs-14">
                        Discuss with the customer what kind of benefits will be
                        provided in a project
                      </p>
                    </li>
                    <li>
                      <div class="date-title">
                        <span class="fs-14 fw-medium mb-1">14 Feb, 2023</span>
                        <span class="text-dark">6 day ago</span>
                      </div>
                      <p class="fs-14">
                        Archived all the files for the construction project
                        monitoring
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="card-title d-flex justify-content-between align-items-center mb-3"
              >
                <h3 class="fw-medium fs-18 mb-0">All Projects</h3>

                <select
                  class="form-select border-0"
                  aria-label="Default select example"
                >
                  <option selected>This Month</option>
                  <option value="1">Last Month</option>
                  <option value="2">This Year</option>
                  <option value="3">Last Year</option>
                </select>
              </div>

              <div class="all-table scroll-bar h-524">
                <table class="table align-middle mb-0">
                  <thead>
                    <tr>
                      <th class="text-dark fw-medium fs-14 ps-0" scope="col">
                        Project Name
                      </th>
                      <th class="text-dark fw-medium fs-14" scope="col">
                        Hours Spent
                      </th>
                      <th class="text-dark fw-medium fs-14" scope="col">
                        Progress
                      </th>
                      <th class="text-dark fw-medium fs-14" scope="col">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td class="ps-0">
                        <router-link
                          to="/project-details"
                          class="text-decoration-none"
                        >
                          <h5 class="fs-14 text-dark">Product Development</h5>
                        </router-link>
                      </td>
                      <td>
                        <span class="text-body">20:30 hrs</span>
                      </td>
                      <td>
                        <span class="text-body d-block mb-1">70%</span>
                        <div
                          class="progress rounde rounded-0 overflow-visible"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 5px"
                        >
                          <div
                            class="progress-bar rounde rounded-0 overflow-visible"
                            style="width: 70%; height: 5px"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="rounded-0 text-primary">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <router-link
                          to="/project-details"
                          class="text-decoration-none"
                        >
                          <h5 class="fs-14 text-dark">
                            Nursery Management System
                          </h5>
                        </router-link>
                      </td>
                      <td>
                        <span class="text-body">13:56 hrs</span>
                      </td>
                      <td>
                        <span class="text-body d-block mb-1">50%</span>
                        <div
                          class="progress rounde rounded-0 overflow-visible"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 5px"
                        >
                          <div
                            class="progress-bar rounde rounded-0 overflow-visible"
                            style="width: 50%; height: 5px"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="rounded-0 text-danger">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <router-link
                          to="/project-details"
                          class="text-decoration-none"
                        >
                          <h5 class="fs-14 text-dark">
                            Hotel Management System
                          </h5>
                        </router-link>
                      </td>
                      <td>
                        <span class="text-body">09:45 hrs</span>
                      </td>
                      <td>
                        <span class="text-body d-block mb-1">100%</span>
                        <div
                          class="progress rounde rounded-0 overflow-visible"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 5px"
                        >
                          <div
                            class="progress-bar rounde rounded-0 overflow-visible"
                            style="width: 100%; height: 5px"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="rounded-0 text-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <router-link
                          to="/project-details"
                          class="text-decoration-none"
                        >
                          <h5 class="fs-14 text-dark">
                            Engineering Lite Touch
                          </h5>
                        </router-link>
                      </td>
                      <td>
                        <span class="text-body">04:25 hrs</span>
                      </td>
                      <td>
                        <span class="text-body d-block mb-1">100%</span>
                        <div
                          class="progress rounde rounded-0 overflow-visible"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 5px"
                        >
                          <div
                            class="progress-bar rounde rounded-0 overflow-visible"
                            style="width: 100%; height: 5px"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="rounded-0 text-primary">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <router-link
                          to="/project-details"
                          class="text-decoration-none"
                        >
                          <h5 class="fs-14 text-dark">Python Upgrade</h5>
                        </router-link>
                      </td>
                      <td>
                        <span class="text-body">07:39 hrs</span>
                      </td>
                      <td>
                        <span class="text-body d-block mb-1">30%</span>
                        <div
                          class="progress rounde rounded-0 overflow-visible"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 5px"
                        >
                          <div
                            class="progress-bar rounde rounded-0 overflow-visible"
                            style="width: 30%; height: 5px"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="rounded-0 text-danger">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="ps-0">
                        <router-link
                          to="/project-details"
                          class="text-decoration-none"
                        >
                          <h5 class="fs-14 text-dark">Construction Project</h5>
                        </router-link>
                      </td>
                      <td>
                        <span class="text-body">15: 18 hrs</span>
                      </td>
                      <td>
                        <span class="text-body d-block mb-1">70%</span>
                        <div
                          class="progress rounde rounded-0 overflow-visible"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="height: 5px"
                        >
                          <div
                            class="progress-bar rounde rounded-0 overflow-visible"
                            style="width: 70%; height: 5px"
                          ></div>
                        </div>
                      </td>
                      <td>
                        <span class="rounded-0 text-success">Completed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xxl-3">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="card-title mb-3">
                <h3 class="fw-medium fs-18 mb-0">Connection</h3>
              </div>

              <ul class="ps-0 mb-0 list-unstyled scroll-bar h-365">
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../../assets/images/user/user-15.jpg"
                          alt="user-15"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Patrick Griffith</h3>
                        <span class="text-body">05 Connection</span>
                      </div>
                    </div>
                    <vue-feather
                      type="check-circle"
                      style="width: 20px; stroke: #5c61f2"
                    ></vue-feather>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../../assets/images/user/user-16.jpg"
                          alt="user-16"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">David Martinez</h3>
                        <span class="text-body">09 Connection</span>
                      </div>
                    </div>
                    <vue-feather
                      type="check-circle"
                      style="width: 20px; stroke: #5c61f2"
                    ></vue-feather>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../../assets/images/user/user-17.jpg"
                          alt="user-17"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Sutherland Lee</h3>
                        <span class="text-body">15 Connection</span>
                      </div>
                    </div>
                    <vue-feather
                      type="check-circle"
                      style="width: 20px; stroke: #5c61f2"
                    ></vue-feather>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../../assets/images/user/user-18.jpg"
                          alt="user-18"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Tony Wright</h3>
                        <span class="text-body">03 Connection</span>
                      </div>
                    </div>
                    <vue-feather
                      type="check-circle"
                      style="width: 20px; stroke: #5c61f2"
                    ></vue-feather>
                  </div>
                </li>
                <li class="mb-3">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../../assets/images/user/user-19.jpg"
                          alt="user-19"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">William Frost</h3>
                        <span class="text-body">01 Connection</span>
                      </div>
                    </div>
                    <vue-feather
                      type="check-circle"
                      style="width: 20px; stroke: #5c61f2"
                    ></vue-feather>
                  </div>
                </li>
                <li class="mb-0">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <img
                          class="wh-40 rounded-circle"
                          src="../../../assets/images/user/user-20.jpg"
                          alt="user-20"
                        />
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h3 class="fs-14 mb-1">Tony David</h3>
                        <span class="text-body">07 Connection</span>
                      </div>
                    </div>
                    <vue-feather
                      type="check-circle"
                      style="width: 20px; stroke: #5c61f2"
                    ></vue-feather>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div class="card-title mb-3">
                <h3 class="fw-medium fs-18 mb-0">Teams</h3>
              </div>

              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <ul
                    class="ps-0 mb-0 list-unstyled d-flex align-items-center teams-list"
                  >
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-15.jpg"
                        alt="user-15"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-16.jpg"
                        alt="user-16"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-17.jpg"
                        alt="user-17"
                      />
                    </li>
                    <li class="total">
                      <span>+5</span>
                    </li>
                  </ul>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="fs-14 mb-1">Mobile App Development</h3>
                  <span class="text-body">8 Members</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <ul
                    class="ps-0 mb-0 list-unstyled d-flex align-items-center teams-list"
                  >
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-18.jpg"
                        alt="user-18"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-19.jpg"
                        alt="user-19"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-20.jpg"
                        alt="user-20"
                      />
                    </li>
                    <li class="total">
                      <span>+1</span>
                    </li>
                  </ul>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="fs-14 mb-1">Cloud Migration</h3>
                  <span class="text-body">4 Members</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <ul
                    class="ps-0 mb-0 list-unstyled d-flex align-items-center teams-list"
                  >
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-15.jpg"
                        alt="user-15"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-16.jpg"
                        alt="user-16"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-17.jpg"
                        alt="user-17"
                      />
                    </li>
                    <li class="total">
                      <span>+4</span>
                    </li>
                  </ul>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="fs-14 mb-1">Database Development</h3>
                  <span class="text-body">7 Members</span>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="flex-shrink-0">
                  <ul
                    class="ps-0 mb-0 list-unstyled d-flex align-items-center teams-list"
                  >
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-15.jpg"
                        alt="user-15"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-16.jpg"
                        alt="user-16"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-17.jpg"
                        alt="user-17"
                      />
                    </li>
                    <li class="total">
                      <span>+2</span>
                    </li>
                  </ul>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="fs-14 mb-1">Website Development</h3>
                  <span class="text-body">5 Members</span>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <ul
                    class="ps-0 mb-0 list-unstyled d-flex align-items-center teams-list"
                  >
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-15.jpg"
                        alt="user-15"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-16.jpg"
                        alt="user-16"
                      />
                    </li>
                    <li>
                      <img
                        class="wh-40 rounded-circle"
                        src="../../../assets/images/user/user-17.jpg"
                        alt="user-17"
                      />
                    </li>
                    <li class="total">
                      <span>+5</span>
                    </li>
                  </ul>
                </div>
                <div class="flex-grow-1 ms-3">
                  <h3 class="fs-14 mb-1">Data Analytics</h3>
                  <span class="text-body">8 Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade"
      id="teams-tab-pane"
      role="tabpanel"
      aria-labelledby="teams-tab"
      tabindex="0"
    >
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/teams/teams-1.jpg"
                      alt="teams-1"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">Sutherland Lee</h4>
                    <span class="fs-14 text-body">Team Leader</span>
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">Database Development and Management</p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-13.jpg"
                    alt="teams-13"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-14.jpg"
                    alt="teams-14"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-15.jpg"
                    alt="teams-15"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body">Project Complete</span>
                  <span class="text-body">80%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 80%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/teams/teams-2.jpg"
                      alt="teams-2"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">Patrick Griffith</h4>
                    <span class="fs-14 text-body">Team Leader</span>
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">Cybersecurity Audit and Enhancement</p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-16.jpg"
                    alt="teams-16"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-17.jpg"
                    alt="teams-17"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-18.jpg"
                    alt="teams-18"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body">Project Complete</span>
                  <span class="text-body">70%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 70%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/teams/teams-3.jpg"
                      alt="teams-3"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">Paul Cupp</h4>
                    <span class="fs-14 text-body">Team Leader</span>
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">Construction Project Monitoring</p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-19.jpg"
                    alt="teams-19"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-20.jpg"
                    alt="teams-20"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-21.jpg"
                    alt="teams-21"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body">Project Complete</span>
                  <span class="text-body">50%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 50%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/teams/teams-4.jpg"
                      alt="teams-4"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">David Martinez</h4>
                    <span class="fs-14 text-body">Team Leader</span>
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">Cloud Migration and Management</p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-22.jpg"
                    alt="teams-22"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-23.jpg"
                    alt="teams-23"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body">Project Complete</span>
                  <span class="text-body">85%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 85%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/teams/teams-5.jpg"
                      alt="teams-5"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">Lani Brown</h4>
                    <span class="fs-14 text-body">Team Leader</span>
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">Website Development</p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-24.jpg"
                    alt="teams-24"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-25.jpg"
                    alt="teams-25"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-26.jpg"
                    alt="teams-26"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body">Project Complete</span>
                  <span class="text-body">100%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 100%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/teams/teams-6.jpg"
                      alt="teams-6"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">William Frost</h4>
                    <span class="fs-14 text-body">Team Leader</span>
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">Network Infrastructure Upgrade</p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-27.jpg"
                    alt="teams-27"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-28.jpg"
                    alt="teams-28"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body">Project Complete</span>
                  <span class="text-body">30%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 30%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="tab-pane fade show active"
      id="projects-tab-pane"
      role="tabpanel"
      aria-labelledby="projects-tab"
      tabindex="0"
    >
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/sellers/sellers-5.png"
                      alt="sellers-5"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark mb-0">
                      Database Development and Management
                    </h4>
                    <span class="fs-14 text-body"
                      ><span class="text-dark">Client:</span> Sutherland
                      Lee</span
                    >
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">
                Project Deadline: <span class="text-body">01/04/2023</span>
              </p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-13.jpg"
                    alt="teams-13"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-14.jpg"
                    alt="teams-14"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-15.jpg"
                    alt="teams-15"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body"
                    >Budget: <span class="text-dark">$8,450</span></span
                  >
                  <span class="text-body">80%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 80%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/sellers/sellers-9.png"
                      alt="sellers-9"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">
                      Cybersecurity Audit and Enhancement
                    </h4>
                    <span class="fs-14 text-body"
                      ><span class="text-dark">Client:</span> Patrick
                      Griffith</span
                    >
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">
                Project Deadline: <span class="text-body">20/03/2023</span>
              </p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-16.jpg"
                    alt="teams-16"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-17.jpg"
                    alt="teams-17"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-18.jpg"
                    alt="teams-18"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body"
                    >Budget: <span class="text-dark">$5,850</span></span
                  >
                  <span class="text-body">70%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 70%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/sellers/sellers-3.png"
                      alt="sellers-3"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">
                      Construction Project Monitoring
                    </h4>
                    <span class="fs-14 text-body"
                      ><span class="text-dark">Client:</span> Paul Cupp</span
                    >
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">
                Project Deadline: <span class="text-body">25/04/2023</span>
              </p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-19.jpg"
                    alt="teams-19"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-20.jpg"
                    alt="teams-20"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-21.jpg"
                    alt="teams-21"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body"
                    >Budget: <span class="text-dark">$4,890</span></span
                  >
                  <span class="text-body">50%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 50%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/sellers/sellers-11.png"
                      alt="sellers-11"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">
                      Cloud Migration and Management
                    </h4>
                    <span class="fs-14 text-body"
                      ><span class="text-dark">Client:</span> David
                      Martinez</span
                    >
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">
                Project Deadline: <span class="text-body">10/04/2023</span>
              </p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-22.jpg"
                    alt="teams-22"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-23.jpg"
                    alt="teams-23"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body"
                    >Budget: <span class="text-dark">$9,350</span></span
                  >
                  <span class="text-body">85%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 85%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/sellers/sellers-7.png"
                      alt="sellers-5"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">
                      Website Development
                    </h4>
                    <span class="fs-14 text-body"
                      ><span>Client:</span> Lani Brown</span
                    >
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">
                Project Deadline: <span class="text-body">01/03/2023</span>
              </p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-24.jpg"
                    alt="teams-24"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-25.jpg"
                    alt="teams-25"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-26.jpg"
                    alt="teams-26"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body"
                    >Budget: <span class="text-dark">$2,000</span></span
                  >
                  <span class="text-body">100%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 100%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card border-0 box-shadow border-radius-10 mb-4">
            <div class="card-body p-4">
              <div
                class="d-flex align-items-center justify-content-between mb-2"
              >
                <div class="d-lg-flex d-md-flex d-sm-flex align-items-center">
                  <div class="flex-shrink-0 text-center mb-3 mb-lg-0 mb-md-0">
                    <img
                      class="wh-50 rounded-circle"
                      src="../../../assets/images/sellers/sellers-12.png"
                      alt="sellers-6"
                    />
                  </div>
                  <div class="flex-grow-1 ms-lg-3 ms-md-3 ms-sm-3">
                    <h4 class="fs-14 fw-medium text-dark">
                      Network Infrastructure Upgrade
                    </h4>
                    <span class="fs-14 text-body"
                      ><span class="text-dark">Client:</span> William
                      Frost</span
                    >
                  </div>
                </div>

                <div class="dropdown action-opt">
                  <button
                    class="btn bg-transparent p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="edit"></vue-feather>
                        Edit
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:;">
                        <vue-feather type="trash"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <p class="text-dark fs-14">
                Project Deadline: <span class="text-body">30/06/2023</span>
              </p>
              <ul
                class="ps-0 mb-3 list-unstyled d-flex align-items-center members-list"
              >
                <li>
                  <span class="text-dark fw-medium">Team Members:</span>
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-27.jpg"
                    alt="teams-27"
                  />
                </li>
                <li>
                  <img
                    src="../../../assets/images/teams/teams-28.jpg"
                    alt="teams-28"
                  />
                </li>
              </ul>

              <div>
                <div
                  class="d-flex align-items-center justify-content-between mb-1"
                >
                  <span class="text-body"
                    >Budget: <span class="text-dark">$6,750</span></span
                  >
                  <span class="text-body">30%</span>
                </div>
                <div
                  class="progress rounde rounded-0 overflow-visible"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px; background: #efeffe"
                >
                  <div
                    class="progress-bar rounde rounded-0 overflow-visible"
                    style="width: 30%; height: 5px; background: #5c61f2"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsContent",
};
</script>