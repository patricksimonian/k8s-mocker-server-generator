/**
* ExternalDocumentation allows referencing an external resource for extended documentation.
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation {
/**
* 
*/
description?: string;
/**
* 
*/
url?: string;
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation {
  return {
    description: data?.description !== undefined ? data.description : '',
    url: data?.url !== undefined ? data.url : '',
  };
}
