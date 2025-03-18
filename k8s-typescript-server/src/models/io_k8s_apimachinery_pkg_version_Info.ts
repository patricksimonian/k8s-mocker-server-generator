/**
* Info contains versioning information. how we'll want to distribute that information.
*/
export interface io_k8s_apimachinery_pkg_version_Info {
/**
* 
*/
buildDate: string;
/**
* 
*/
gitVersion: string;
/**
* 
*/
goVersion: string;
/**
* 
*/
major: string;
/**
* 
*/
minor: string;
/**
* 
*/
platform: string;
/**
* 
*/
compiler: string;
/**
* 
*/
gitCommit: string;
/**
* 
*/
gitTreeState: string;
}

/**
* Create a new io_k8s_apimachinery_pkg_version_Info with default values
*/
export function createio_k8s_apimachinery_pkg_version_Info(data?: Partial<io_k8s_apimachinery_pkg_version_Info>): io_k8s_apimachinery_pkg_version_Info {
  return {
    buildDate: data?.buildDate !== undefined ? data.buildDate : '',
    gitVersion: data?.gitVersion !== undefined ? data.gitVersion : '',
    goVersion: data?.goVersion !== undefined ? data.goVersion : '',
    major: data?.major !== undefined ? data.major : '',
    minor: data?.minor !== undefined ? data.minor : '',
    platform: data?.platform !== undefined ? data.platform : '',
    compiler: data?.compiler !== undefined ? data.compiler : '',
    gitCommit: data?.gitCommit !== undefined ? data.gitCommit : '',
    gitTreeState: data?.gitTreeState !== undefined ? data.gitTreeState : '',
  };
}
