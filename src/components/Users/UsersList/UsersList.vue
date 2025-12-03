<template>
  <div class="card border-0 box-shadow border-radius-10 mb-4">
    <div class="card-body p-4">
      <div class="all-table scroll-bar h-624 mb-5">
        <table class="table align-middle">
          <thead>
            <tr>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14 ps-0" scope="col">
                Name
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Email
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Phone
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Last Active Date
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col">
                Roles
              </th>
              <th class="text-dark fw-medium pt-0 pb-2 fs-14" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in flattenUsers()" :key="user.id">
              <td class="ps-0">
                <span class="text-start text-dark">{{ user.fullName }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ user.email }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ user.phoneNumber }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ formatLongDate(user.lastActive) }}</span>
              </td>
              <td>
                <span class="d-block text-dark">{{ user.roles }}</span>
              </td>
              <td class="text-end text-center">
                <div class="dropdown action-opt">
                  <button class="btn bg-transparent p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <vue-feather type="more-horizontal"></vue-feather>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item d-flex align-items-center" href="javascript:;" @click="onDelete(user)">
                        <vue-feather type="trash-2" size="16" class="me-2"></vue-feather>
                        Delete
                      </a>
                    </li>
                  </ul>
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
import type { User, FlattenedUser } from "@/types/user"
import { formatLongDate } from "@/utils/helper"


const props = defineProps<{
  users: User[]
}>()

const emit = defineEmits(["delete-user"])

const flattenUser = (user: User): FlattenedUser => {
  return {
    ...user,
    roles: user.roles.join(',')
  };
};

const flattenUsers = (): FlattenedUser[] => {
  return props.users
    .filter(user => !user.roles.includes("SuperAdmin"))
    .map(flattenUser);
};

const onDelete = (user: FlattenedUser) => {
  const userToDelete = props.users.find((u) => { return u.id === user.id})

  if (userToDelete) emit("delete-user", userToDelete)
}


</script>