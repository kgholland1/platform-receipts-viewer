export type User =  {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  lastActive: string;
  roles: string[];
}

export type FlattenedUser = {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  lastActive: string;
  roles: string;
}

export type AddUser =  {
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;
}

export type UserProfile = {
  fullName: string,
  email: string,
  phoneNumber?: string,
  created: string
}

export type UserChangePassword = {
  currentPassword: string,
  newPassword: string
}

export type ReceiptPayload = {
  agencyUniqueReference: string,
  receiptDescription: string,
  recipientName: string,
  recipientPhone: string,
  recipientEmail: string,
  amount: number,
  receiptType: string,
  receivedBy: string
}
