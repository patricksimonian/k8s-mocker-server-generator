// Path: routes/ApisResource.k8s.ioV1alpha3ResourceclaimsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { listResourceV1alpha3ResourceClaimForAllNamespaces } from '../controllers/ResourceV1alpha3Controller'

import {router} from './router';

router.get('/apis/resource.k8s.io/v1alpha3/resourceclaims', listResourceV1alpha3ResourceClaimForAllNamespaces)

export default router;
