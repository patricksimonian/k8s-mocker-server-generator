/**
* CustomResourceSubresources defines the status and scale subresources for CustomResources.
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources {
/**
* CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
*/
scale?: { labelSelectorPath?: string; specReplicasPath: string; statusReplicasPath: string };
/**
* CustomResourceSubresourceStatus defines how to serve the status subresource for CustomResources. Status is represented by the `.status` JSON path inside of a CustomResource. When set, * exposes a /status subresource for the custom resource * PUT requests to the /status subresource take a custom resource object, and ignore changes to anything except the status stanza * PUT/POST/PATCH requests to the custom resource ignore changes to the status stanza
*/
status?: Record<string, any>;
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources {
  return {
    scale: data?.scale !== undefined ? data.scale : { specReplicasPath: '', statusReplicasPath: '' },
    status: data?.status !== undefined ? data.status : {},
  };
}
