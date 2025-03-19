/**
* Info contains versioning information. how we'll want to distribute that information.
* @resourceType info
* @kind Info
*/
export interface io_k8s_apimachinery_pkg_version_Info {
/**
* 
* @required
*/
buildDate: string;
/**
* 
* @required
*/
compiler: string;
/**
* 
* @required
*/
gitTreeState: string;
/**
* 
* @required
*/
goVersion: string;
/**
* 
* @required
*/
minor: string;
/**
* 
* @required
*/
gitCommit: string;
/**
* 
* @required
*/
gitVersion: string;
/**
* 
* @required
*/
major: string;
/**
* 
* @required
*/
platform: string;
}

/**
* Create a new Info with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_version_Info instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_version_Info(data?: Partial<io_k8s_apimachinery_pkg_version_Info>): io_k8s_apimachinery_pkg_version_Info {
 return {
   buildDate: data?.buildDate !== undefined ? data.buildDate : '',
   compiler: data?.compiler !== undefined ? data.compiler : '',
   gitTreeState: data?.gitTreeState !== undefined ? data.gitTreeState : '',
   goVersion: data?.goVersion !== undefined ? data.goVersion : '',
   minor: data?.minor !== undefined ? data.minor : '',
   gitCommit: data?.gitCommit !== undefined ? data.gitCommit : '',
   gitVersion: data?.gitVersion !== undefined ? data.gitVersion : '',
   major: data?.major !== undefined ? data.major : '',
   platform: data?.platform !== undefined ? data.platform : '',
 };
}
