// Path: routes/V1WatchLimitrangesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1LimitRangeListForAllNamespaces } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/limitranges', watchCoreV1LimitRangeListForAllNamespaces)

export default router;
