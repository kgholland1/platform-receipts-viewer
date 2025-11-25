<template>
  <div class="card border-0 box-shadow border-radius-10 mb-5">
    <div class="card-body p-4">
      <div v-if="!!agencies.length" class="all-table scroll-bar h-524">
        <table class="table align-middle mb-5">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col-3">
                Name
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col-3">
                Receipt Type
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col-6">
                Additional Fields
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="agency in agencies" :key="agency.agencyId">
              <td class="ps-0">
                <span class="text-start text-dark">{{ agency.name }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ agency.receiptType }}</span>
              </td>
              <td>
                <div v-if="agency.additionalFields.length > 0" class="mb-3">

                  <!-- Header -->
                  <div class="row fw-medium text-secondary small mb-1">
                    <div class="col-6">Field Name</div>
                    <div class="col-6 text-end">Required</div>
                  </div>

                  <!-- Rows -->
                  <div v-for="(field, index) in getUniqueFields(agency.additionalFields)" :key="index"
                    class="row small py-1">

                    <div class="col-6 text-dark">
                      {{ field.fieldName }}
                    </div>

                    <div class="col-6 text-end">
                      <span :class="field.fieldIsRequired ? 'text-success' : 'text-danger'" class="fw-medium">
                        {{ field.fieldIsRequired ? 'Yes' : 'No' }}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

import { useAgencyStore } from "@/stores/agency"
import { storeToRefs } from "pinia"
import type { AdditionalField } from "@/types/agency"

const { getAgenciesSettings } = useAgencyStore()
const { agencies } = storeToRefs(useAgencyStore())

getAgenciesSettings()

const getUniqueFields = (fields: AdditionalField[]): AdditionalField[] => {
  const seen = new Map<string, AdditionalField>();
  fields.forEach(field => {
    if (!seen.has(field.fieldName)) {
      seen.set(field.fieldName, field);
    }
  });
  return Array.from(seen.values());
};
</script>