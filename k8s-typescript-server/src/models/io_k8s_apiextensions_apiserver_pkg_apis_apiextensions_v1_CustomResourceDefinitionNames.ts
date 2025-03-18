/**
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames {
/**
* shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
*/
shortNames?: string[];
/**
* singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
*/
singular?: string;
/**
* categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
*/
categories?: string[];
/**
* kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
*/
kind: string;
/**
* listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
*/
listKind?: string;
/**
* plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
*/
plural: string;
}

/**
* Create a new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames with default values
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames {
  return {
    shortNames: data?.shortNames !== undefined ? data.shortNames : [],
    singular: data?.singular !== undefined ? data.singular : '',
    categories: data?.categories !== undefined ? data.categories : [],
    kind: data?.kind !== undefined ? data.kind : '',
    listKind: data?.listKind !== undefined ? data.listKind : '',
    plural: data?.plural !== undefined ? data.plural : '',
  };
}
