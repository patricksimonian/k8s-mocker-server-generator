// Path: routes/ApisDiscovery.k8s.ioV1Route.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { getDiscoveryV1APIResources } from '../controllers/DiscoveryV1Controller'

import {router} from './router';

router.get('/apis/discovery.k8s.io/v1/', getDiscoveryV1APIResources)

export default router;
