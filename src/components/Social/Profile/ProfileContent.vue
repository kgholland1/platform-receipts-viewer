<template>
  <div class="row">
    <div class="col-lg-9">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-0">
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

            <div class="d-flex">
              <a
                href="#"
                class="default-btn text-decoration-none d-none d-lg-block d-md-block d-sm-block text-white py-1 px-2"
                >Message</a
              >
              <a
                href="#"
                class="default-btn border-btn text-decoration-none d-none d-lg-block d-md-block d-sm-block ms-3 py-1 px-2"
                >Follow</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="tab-content" id="myTabContent">


        <div
          class="tab-pane fade"
          id="timeline-tab-pane"
          role="tabpanel"
          aria-labelledby="timeline-tab"
          tabindex="0"
        >
          <div class="row">
            <div class="col-lg-8 col-md-8">
              <div class="bg-white rounded-3">
                <div class="card rounded-3 border-0">
                  <div class="card-body p-4 pb-0">
                    <ul
                      class="list-unstyled ps-0 mb-2 pb-3 d-flex post-type border-bottom border-color"
                    >
                      <li>
                        <a
                          class="text-dark fw-medium fs-14 text-decoration-none active"
                          href="#"
                          >Create Post</a
                        >
                      </li>
                      <li class="ms-4">
                        <a class="text-body fs-14 text-decoration-none" href="#"
                          >Photos/Videos</a
                        >
                      </li>
                      <li class="ms-4">
                        <a class="text-body fs-14 text-decoration-none" href="#"
                          >Story</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card rounded-3 border-0 mb-4">
                  <div class="card-body p-20">
                    <div class="form-group position-relative">
                      <form class="mb-3">
                        <textarea
                          cols="30"
                          rows="7"
                          class="form-control h-auto"
                          placeholder="Type Something..."
                        ></textarea>
                      </form>

                      <ul
                        class="list-unstyled ps-0 mb-0 d-flex align-items-center"
                      >
                        <li>
                          <button type="submit" class="default-btn border-0">
                            Published Post
                          </button>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <vue-feather
                              style="stroke: #a9a9c8; width: 20px"
                              type="image"
                            ></vue-feather>
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <vue-feather
                              style="stroke: #a9a9c8; width: 20px"
                              type="map-pin"
                            ></vue-feather>
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <vue-feather
                              style="stroke: #a9a9c8; width: 20px"
                              type="smile"
                            ></vue-feather>
                          </a>
                        </li>
                        <li class="ms-3">
                          <a href="#">
                            <vue-feather
                              style="stroke: #a9a9c8; width: 20px"
                              type="paperclip"
                            ></vue-feather>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded-3 border-0 mb-4">
                <div class="card-body p-4">
                  <div class="border-bottom border-color pb-4 mb-4">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <img
                          class="rounded-circle wh-50"
                          src="../../../assets/images/user/user-27.jpg"
                          alt="user-27"
                        />
                        <div class="ms-3">
                          <h5 class="text-dark fw-semibold fs-14 mb-1">
                            Carole Mathis
                          </h5>
                          <span class="text-body fs-14">10 Min Ago</span>
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
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="javascript:;">
                              <vue-feather type="eye"></vue-feather>
                              View
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
                  </div>

                  <p
                    class="text-body fs-14 mb-4 pb-4 border-bottom border-color"
                  >
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Donec sollicitudin molestie malesuada. Pellentesque
                    in ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                    eget consectetur sed, convallis at tellus. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <ul
                    class="list-unstyled ps-0 mb-4 pb-4 d-flex align-items-center border-bottom border-color"
                  >
                    <li class="me-4">
                      <a href="#" class="text-decoration-none">
                        <vue-feather
                          style="
                            stroke: #919aa3;
                            width: 18px;
                            position: relative;
                            top: -2px;
                          "
                          type="thumbs-up"
                        ></vue-feather>
                        <span class="text-body ms-1 fs-14">65 Likes</span>
                      </a>
                    </li>
                    <li class="me-4">
                      <a href="#" class="text-decoration-none">
                        <vue-feather
                          style="
                            stroke: #919aa3;
                            width: 18px;
                            position: relative;
                            top: -2px;
                          "
                          type="message-square"
                        ></vue-feather>
                        <span class="text-body ms-1 fs-14">0 Comments</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        <vue-feather
                          style="
                            stroke: #919aa3;
                            width: 18px;
                            position: relative;
                            top: -2px;
                          "
                          type="share-2"
                        ></vue-feather>
                        <span class="text-body ms-1 fs-14">0 Share</span>
                      </a>
                    </li>
                  </ul>

                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <img
                      style="width: 40px"
                      class="rounded-circle"
                      src="../../../assets/images/user/user-27.jpg"
                      alt="user-27"
                    />

                    <form class="w-100 mx-4 position-relative">
                      <input
                        style="height: 40px; border-radius: 20px 50px 50px 20px"
                        type="text"
                        class="form-control"
                        placeholder="Type Something..."
                      />

                      <button
                        type="submit"
                        class="default-btn btn-outline-primary bg border-0 rounded-circle text-center p-0 position-absolute top-50 end-0 translate-middle-y"
                        style="width: 40px; height: 40px"
                      >
                        <vue-feather
                          type="send"
                          style="width: 18px"
                        ></vue-feather>
                      </button>
                    </form>

                    <div>
                      <ul
                        class="list-unstyled ps-0 mb-0 d-flex align-items-center"
                      >
                        <li>
                          <a href="#">
                            <vue-feather
                              style="width: 20px; stroke: #a9a9c8"
                              type="smile"
                            ></vue-feather>
                          </a>
                        </li>
                        <li class="ms-2">
                          <a href="#">
                            <vue-feather
                              style="width: 20px; stroke: #a9a9c8"
                              type="link"
                            ></vue-feather>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card rounded-3 border-0 mb-4">
                <div class="card-body p-4">
                  <div class="border-bottom border-color pb-4 mb-4">
                    <div
                      class="d-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center">
                        <img
                          class="rounded-circle wh-50"
                          src="../../../assets/images/user/user-31.jpg"
                          alt="user-31"
                        />
                        <div class="ms-3">
                          <h5 class="text-dark fw-semibold fs-14 mb-1">
                            Patrick Griffith
                          </h5>
                          <span class="text-body fs-14">20 Min Ago</span>
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
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="javascript:;">
                              <vue-feather type="eye"></vue-feather>
                              View
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
                  </div>

                  <p
                    class="text-body fs-14 mb-4 pb-4 border-bottom border-color"
                  >
                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                    lectus. Donec sollicitudin molestie malesuada. Pellentesque
                    in ipsum id orci porta dapibus. Vivamus magna justo, lacinia
                    eget consectetur sed, convallis at tellus. Vestibulum ac
                    diam sit amet quam vehicula elementum sed sit amet dui.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                  <ul
                    class="list-unstyled ps-0 mb-4 pb-4 d-flex align-items-center border-bottom border-color"
                  >
                    <li class="me-4">
                      <a href="#" class="text-decoration-none">
                        <vue-feather
                          style="
                            stroke: #919aa3;
                            width: 18px;
                            position: relative;
                            top: -2px;
                          "
                          type="thumbs-up"
                        ></vue-feather>
                        <span class="text-body ms-1 fs-14">65 Likes</span>
                      </a>
                    </li>
                    <li class="me-4">
                      <a href="#" class="text-decoration-none">
                        <vue-feather
                          style="
                            stroke: #919aa3;
                            width: 18px;
                            position: relative;
                            top: -2px;
                          "
                          type="message-square"
                        ></vue-feather>
                        <span class="text-body ms-1 fs-14">0 Comments</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="text-decoration-none">
                        <vue-feather
                          style="
                            stroke: #919aa3;
                            width: 18px;
                            position: relative;
                            top: -2px;
                          "
                          type="share-2"
                        ></vue-feather>
                        <span class="text-body ms-1 fs-14">0 Share</span>
                      </a>
                    </li>
                  </ul>

                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <img
                      style="width: 40px"
                      class="rounded-circle"
                      src="../../../assets/images/user/user-31.jpg"
                      alt="user-31"
                    />

                    <form class="w-100 mx-4 position-relative">
                      <input
                        style="height: 40px; border-radius: 20px 50px 50px 20px"
                        type="text"
                        class="form-control"
                        placeholder="Type Something..."
                      />

                      <button
                        type="submit"
                        class="default-btn btn-outline-primary bg border-0 rounded-circle text-center p-0 position-absolute top-50 end-0 translate-middle-y"
                        style="width: 40px; height: 40px"
                      >
                        <vue-feather
                          type="send"
                          style="width: 18px"
                        ></vue-feather>
                      </button>
                    </form>

                    <div>
                      <ul
                        class="list-unstyled ps-0 mb-0 d-flex align-items-center"
                      >
                        <li>
                          <a href="#">
                            <vue-feather
                              style="width: 20px; stroke: #a9a9c8"
                              type="smile"
                            ></vue-feather>
                          </a>
                        </li>
                        <li class="ms-2">
                          <a href="#">
                            <vue-feather
                              style="width: 20px; stroke: #a9a9c8"
                              type="link"
                            ></vue-feather>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card rounded-3 border-0 mb-4">
                <div class="card-body p-4">
                  <h4 class="fw-medium fs-18 mb-3">Friends</h4>

                  <form class="src-form position-relative mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search here..."
                      style="padding-left: 40px; height: 40px"
                    />
                    <vue-feather
                      type="search"
                      class="position-absolute top-50 start-0 translate-middle-y"
                      style="stroke: #919aa3; left: 15px !important"
                    ></vue-feather>
                  </form>

                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-31.jpg"
                        alt="user-31"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">Patrick Griffith</h4>
                      <span class="text-body fs-14">Managing Director</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-36.jpg"
                        alt="user-36"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">David Martinez</h4>
                      <span class="text-body fs-14">Financial Advisor</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-37.jpg"
                        alt="user-37"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">Sutherland Lee</h4>
                      <span class="text-body fs-14">Founder</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-27.jpg"
                        alt="user-27"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">Tony Wright</h4>
                      <span class="text-body fs-14">CEO</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-0">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-38.jpg"
                        alt="user-38"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">William Frost</h4>
                      <span class="text-body fs-14">Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card rounded-3 border-0 mb-4">
                <div class="card-body p-4 pb-0">
                  <h4 class="fw-medium fs-18 mb-3">Photos</h4>

                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-1.jpg"
                          alt="photo-1"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-2.jpg"
                          alt="photo-2"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-3.jpg"
                          alt="photo-3"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-4.jpg"
                          alt="photo-4"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-5.jpg"
                          alt="photo-5"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-6.jpg"
                          alt="photo-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="activity-tab-pane"
          role="tabpanel"
          aria-labelledby="activity-tab"
          tabindex="0"
        >
          <div class="row justify-content-center">
            <div class="col-lg-8">
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

                  <div
                    class="tab-content scroll-bar h-387"
                    id="pills-tabContent"
                  >
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
                            <span class="fs-14 fw-medium mb-1"
                              >20 Feb, 2023</span
                            >
                            <span class="text-dark">20 min ago</span>
                          </div>
                          <p class="fs-14">
                            Assigned as director of project nursery management
                            system
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >20 Feb, 2023</span
                            >
                            <span class="text-dark">50 min ago</span>
                          </div>
                          <p class="fs-14">
                            Awaiting review from client after project update
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >19 Feb, 2023</span
                            >
                            <span class="text-dark">1 day ago</span>
                          </div>
                          <p class="fs-14">
                            Estimate the full budget of the project and take
                            customer feedback
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >19 Feb, 2023</span
                            >
                            <span class="text-dark">2 day ago</span>
                          </div>
                          <p class="fs-14">
                            How many days to wait to get the refund of the
                            project
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >16 Feb, 2023</span
                            >
                            <span class="text-dark">4 day ago</span>
                          </div>
                          <p class="fs-14">
                            Discuss with the customer what kind of benefits will
                            be provided in a project
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >14 Feb, 2023</span
                            >
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
                            <span class="fs-14 fw-medium mb-1"
                              >20 Feb, 2023</span
                            >
                            <span class="text-dark">20 min ago</span>
                          </div>
                          <p class="fs-14">
                            Assigned as director of project nursery management
                            system
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >20 Feb, 2023</span
                            >
                            <span class="text-dark">50 min ago</span>
                          </div>
                          <p class="fs-14">
                            Awaiting review from client after project update
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >19 Feb, 2023</span
                            >
                            <span class="text-dark">1 day ago</span>
                          </div>
                          <p class="fs-14">
                            Estimate the full budget of the project and take
                            customer feedback
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >19 Feb, 2023</span
                            >
                            <span class="text-dark">2 day ago</span>
                          </div>
                          <p class="fs-14">
                            How many days to wait to get the refund of the
                            project
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >16 Feb, 2023</span
                            >
                            <span class="text-dark">4 day ago</span>
                          </div>
                          <p class="fs-14">
                            Discuss with the customer what kind of benefits will
                            be provided in a project
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >14 Feb, 2023</span
                            >
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
                            <span class="fs-14 fw-medium mb-1"
                              >20 Feb, 2023</span
                            >
                            <span class="text-dark">20 min ago</span>
                          </div>
                          <p class="fs-14">
                            Assigned as director of project nursery management
                            system
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >20 Feb, 2023</span
                            >
                            <span class="text-dark">50 min ago</span>
                          </div>
                          <p class="fs-14">
                            Awaiting review from client after project update
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >19 Feb, 2023</span
                            >
                            <span class="text-dark">1 day ago</span>
                          </div>
                          <p class="fs-14">
                            Estimate the full budget of the project and take
                            customer feedback
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >19 Feb, 2023</span
                            >
                            <span class="text-dark">2 day ago</span>
                          </div>
                          <p class="fs-14">
                            How many days to wait to get the refund of the
                            project
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >16 Feb, 2023</span
                            >
                            <span class="text-dark">4 day ago</span>
                          </div>
                          <p class="fs-14">
                            Discuss with the customer what kind of benefits will
                            be provided in a project
                          </p>
                        </li>
                        <li>
                          <div class="date-title">
                            <span class="fs-14 fw-medium mb-1"
                              >14 Feb, 2023</span
                            >
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
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card rounded-3 border-0 mb-4">
                <div class="card-body p-4">
                  <h4 class="fw-medium fs-18 mb-3">Friends</h4>

                  <form class="src-form position-relative mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search here..."
                      style="padding-left: 40px; height: 40px"
                    />
                    <vue-feather
                      type="search"
                      class="position-absolute top-50 start-0 translate-middle-y"
                      style="stroke: #919aa3; left: 15px !important"
                    ></vue-feather>
                  </form>

                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-31.jpg"
                        alt="user-31"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">Patrick Griffith</h4>
                      <span class="text-body fs-14">Managing Director</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-36.jpg"
                        alt="user-36"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">David Martinez</h4>
                      <span class="text-body fs-14">Financial Advisor</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-37.jpg"
                        alt="user-37"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">Sutherland Lee</h4>
                      <span class="text-body fs-14">Founder</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-4">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-27.jpg"
                        alt="user-27"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">Tony Wright</h4>
                      <span class="text-body fs-14">CEO</span>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-0">
                    <div class="flex-shrink-0">
                      <img
                        class="wh-50 rounded-circle"
                        src="../../../assets/images/user/user-38.jpg"
                        alt="user-38"
                      />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h4 class="fs-14 fw-medium mb-1">William Frost</h4>
                      <span class="text-body fs-14">Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card rounded-3 border-0 mb-4">
                <div class="card-body p-4 pb-0">
                  <h4 class="fw-medium fs-18 mb-3">Photos</h4>

                  <div class="row">
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-1.jpg"
                          alt="photo-1"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-2.jpg"
                          alt="photo-2"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-3.jpg"
                          alt="photo-3"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-4.jpg"
                          alt="photo-4"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-5.jpg"
                          alt="photo-5"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <div class="mb-4">
                        <img
                          class="rounded-3"
                          src="../../../assets/images/photo/photo-6.jpg"
                          alt="photo-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="card border-0 box-shadow border-radius-10 mb-4">
        <div class="card-body p-4">
          <h4 class="fs-18 fw-medium mb-3">User Bio</h4>
          <p class="mb-4 fs-14 text-body">
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci
            porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
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
          <ul class="ps-0 mb-4 list-unstyled d-flex">
            <li>
              <a
                href="https://www.facebook.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
                target="_blank"
              >
                <vue-feather type="facebook" style="width: 16"></vue-feather>
              </a>
            </li>
            <li class="ms-2">
              <a
                href="https://www.twitter.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
                target="_blank"
              >
                <vue-feather type="twitter" style="width: 16"></vue-feather>
              </a>
            </li>
            <li class="ms-2">
              <a
                href="https://www.linkedin.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
                target="_blank"
              >
                <vue-feather type="linkedin" style="width: 16"></vue-feather>
              </a>
            </li>
            <li class="ms-2">
              <a
                href="https://www.mail.com/"
                class="default-btn text-decoration-none border-btn px-3 py-2 d-inline-block"
                target="_blank"
              >
                <vue-feather type="mail" style="width: 16"></vue-feather>
              </a>
            </li>
          </ul>

          <h4 class="fs-18 fw-medium mb-3">Other Info:</h4>
          <ul class="ps-0 mb-0 list-unstyled">
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Total Balance:</span> $94,500
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Email:</span> lee@gmail.com
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Orders:</span> 685
            </li>
            <li class="fs-14 text-body mb-2">
              <span class="text-dark">Products:</span> 1250
            </li>
            <li class="fs-14 text-body mb-0">
              <span class="text-dark">Event:</span> 07 events
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProfileContent",
};
</script>