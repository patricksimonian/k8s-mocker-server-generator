/**
* CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
* @resourceType customresourcesubresourcestatus
* @kind Customresourcesubresourcestatus
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus {
}

/**
* Create a new Customresourcesubresourcestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus {
 return {
 };
}
