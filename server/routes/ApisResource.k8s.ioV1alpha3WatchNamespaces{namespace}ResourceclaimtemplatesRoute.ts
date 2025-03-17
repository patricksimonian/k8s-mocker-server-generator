// Path: routes/ApisResource.k8s.ioV1alpha3WatchNamespaces{namespace}ResourceclaimtemplatesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchResourceV1alpha3NamespacedResourceClaimTemplateList } from '../controllers/ResourceV1alpha3Controller'

import {router} from './router';

router.get('/apis/resource.k8s.io/v1alpha3/watch/namespaces/:namespace/resourceclaimtemplates', watchResourceV1alpha3NamespacedResourceClaimTemplateList)

export default router;
