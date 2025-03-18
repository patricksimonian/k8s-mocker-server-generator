/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
*/
export interface io_k8s_api_flowcontrol_v1_Subject {
/**
* GroupSubject holds detailed information for group-kind subject.
*/
group?: { name: string };
/**
* `kind` indicates which one of the other fields is non-empty. Required
*/
kind: string;
/**
* ServiceAccountSubject holds detailed information for service-account-kind subject.
*/
serviceAccount?: { name: string; namespace: string };
/**
* UserSubject holds detailed information for user-kind subject.
*/
user?: { name: string };
}

/**
* Create a new io_k8s_api_flowcontrol_v1_Subject with default values
*/
export function createio_k8s_api_flowcontrol_v1_Subject(data?: Partial<io_k8s_api_flowcontrol_v1_Subject>): io_k8s_api_flowcontrol_v1_Subject {
  return {
    group: data?.group !== undefined ? data.group : { name: '' },
    kind: data?.kind !== undefined ? data.kind : '',
    serviceAccount: data?.serviceAccount !== undefined ? data.serviceAccount : { namespace: '', name: '' },
    user: data?.user !== undefined ? data.user : { name: '' },
  };
}
