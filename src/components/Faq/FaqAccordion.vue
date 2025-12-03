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
                <input type="text" class="form-control h-40" style="padding-left: 40px" placeholder="Search here..." />
                <vue-feather type="search" class="position-absolute top-50 start-0 translate-middle-y text-body"
                  style="left: 15px !important; width: 18px"></vue-feather>
              </form>
            </div>
          </div>
        </div>
        <div class="faq-accordion-wrap mw-100">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h6 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  01. Demo and Health Check.
                </button>
              </h6>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div v-if="error && Array.isArray(error) && error.length > 0" id="errorAlert" class="alert alert-danger"
                    role="alert">
                    <div v-for="(err, index) in error" :key="index">
                      {{ err }}
                    </div>
                  </div>
                  <p>Please enter the necessary information for the receipt payload.</p>
                  <form>
                    <div class="form-group mb-4">
                      <label class="label">Agency Reference</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.agencyUniqueReference" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Description</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.receiptDescription" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Recipient Name</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.recipientName" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Phone</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.recipientPhone" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Email</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.recipientEmail" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Amount</label>
                      <input type="number" class="form-control" placeholder="" v-model="state.amount" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Receipt Type</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.receiptType" />
                    </div>
                    <div class="form-group mb-4">
                      <label class="label">Received By</label>
                      <input type="text" class="form-control" placeholder="" v-model="state.receivedBy" />
                    </div>
                    <div class="form-group mb-4">
                      <button type="button" class="default-btn w-100 d-block" @click="onRequest">
                        Request Receipt
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  02. Can a PSP submit an e-GCR request on behalf of an MDA?
                </button>
              </h6>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Yes. A PSP may submit a request on an MDA’s behalf, provided the PSP has the appropriate authorisation
                    and is already processing fees for that MDA.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  03. How do I define the payload for an MDA?
                </button>
              </h6>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    Please refer to the Swagger documentation provided for the full payload structure and field
                    descriptions.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  04. How do I know which receipt type to use for an MDA?
                </button>
              </h6>
              <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    To find the correct receipt type, go to Settings > Agency Settings. There, you will see a
                    comprehensive list of all MDAs
                    for which you are authorised to request an e-GCR on their behalf.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h6 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  05. Technical Enquiries and Support
                </button>
              </h6>
              <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <p class="fs-14" style="line-height: 25px">
                    For any technical enquiries or support requests, please contact PAQ Technologies.
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

<script setup lang="ts">
import { reactive } from 'vue'
import type { ApiResult } from "@/types/auth"
import type { ReceiptPayload } from "@/types/user";
import { useUserStore } from "@/stores/user"
import { storeToRefs } from "pinia"
import Swal from "sweetalert2"

const { requestReceipt } = useUserStore()
const { error } = storeToRefs(useUserStore())

const state = reactive<ReceiptPayload>({
  agencyUniqueReference: "Bill-12345",
  receiptDescription: "APPLICATION FOR REGIONAL NUMBER (Processing Fees)",
  recipientName: "Kofi Ghana",
  recipientPhone: "023345214554",
  recipientEmail: "kofi.ghana@gmail.com",
  amount: 1050,
  receiptType: "LC-GEN",
  receivedBy: "Lands Commission"
})

const onRequest = async () => {

  const response: ApiResult = await requestReceipt(state)
  if (response.success) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'Receipt was generated successfully.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })
  }
}

</script>
<script lang="ts">
export default {}
</script>

