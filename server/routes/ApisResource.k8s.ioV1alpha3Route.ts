// Path: routes/ApisResource.k8s.ioV1alpha3Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getResourceV1alpha3APIResources } from '../controllers/ResourceV1alpha3Controller'

import {router} from './router';

router.get('/apis/resource.k8s.io/v1alpha3/', getResourceV1alpha3APIResources)

export default router;
