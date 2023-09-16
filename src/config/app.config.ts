interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['School Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['School Administrator', 'Teacher', 'IT Support'],
  tenantName: 'Organization',
  applicationName: 'Connected compus ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View public details of the Organization.'],
  ownerAbilities: [
    "Manage the school's data",
    'Invite or remove staff from the organization',
    'Decide what information about the organization can be viewed by guests',
    'Manage the list of students in the organization',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6a40042c-79bd-4e9a-a5b1-9188c658855b',
};
