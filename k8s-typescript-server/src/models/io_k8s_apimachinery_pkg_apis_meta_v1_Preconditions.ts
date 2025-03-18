/**
* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions {
/**
* Specifies the target ResourceVersion
*/
resourceVersion?: string;
/**
* Specifies the target UID.
*/
uid?: string;
}

/**
* Create a new io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions with default values
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_Preconditions(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions>): io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions {
  return {
    resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
    uid: data?.uid !== undefined ? data.uid : '',
  };
}
