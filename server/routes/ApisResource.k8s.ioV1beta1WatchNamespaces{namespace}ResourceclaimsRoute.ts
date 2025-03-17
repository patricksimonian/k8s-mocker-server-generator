// Path: routes/ApisResource.k8s.ioV1beta1WatchNamespaces{namespace}ResourceclaimsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchResourceV1beta1NamespacedResourceClaimList } from '../controllers/ResourceV1beta1Controller'

import {router} from './router';

router.get('/apis/resource.k8s.io/v1beta1/watch/namespaces/:namespace/resourceclaims', watchResourceV1beta1NamespacedResourceClaimList)

export default router;
