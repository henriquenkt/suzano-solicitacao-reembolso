export const environment = {
  attachments: {
    BRIDGE: 'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/',
    NEW_ATTACHMENT:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/workflow/actions/newAttachment',
    COMMIT_ATTACHMENT:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/workflow/actions/commitAttachment',
    LINK_ATTACHMENTS:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/workflow/actions/linkAttachments',
    REQUEST_ATTACHMENT_ACCESS:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/workflow/queries/requestAttachmentAccess',
    GET_ATTACHMENTS:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/workflow/queries/getAttachments',
  },
  user: {
    GET_USER:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/user/queries/getUser',
  },
  roles: {
    GET_USER_ROLES:
      'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/authorization/queries/getUserRoles',
  },
  backend: {
    baseUrl: 'https://web70.seniorcloud.com.br:36101',
    server: 'https://web70.seniorcloud.com.br:36101',
    service: 'br.com.suzano.wf.empregadosHE2',
  },
  domains: {
    platform: 'https://platform.senior.com.br',
  },
};
