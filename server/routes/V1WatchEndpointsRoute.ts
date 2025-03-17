// Path: routes/V1WatchEndpointsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1EndpointsListForAllNamespaces } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/endpoints', watchCoreV1EndpointsListForAllNamespaces)

export default router;
