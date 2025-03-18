/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
*/
export interface io_k8s_api_core_v1_AzureFilePersistentVolumeSource {
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* secretName is the name of secret that contains Azure Storage Account Name and Key
*/
secretName: string;
/**
* secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
*/
secretNamespace?: string;
/**
* shareName is the azure Share Name
*/
shareName: string;
}

/**
* Create a new io_k8s_api_core_v1_AzureFilePersistentVolumeSource with default values
*/
export function createio_k8s_api_core_v1_AzureFilePersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_AzureFilePersistentVolumeSource>): io_k8s_api_core_v1_AzureFilePersistentVolumeSource {
  return {
    readOnly: data?.readOnly !== undefined ? data.readOnly : false,
    secretName: data?.secretName !== undefined ? data.secretName : '',
    secretNamespace: data?.secretNamespace !== undefined ? data.secretNamespace : '',
    shareName: data?.shareName !== undefined ? data.shareName : '',
  };
}
