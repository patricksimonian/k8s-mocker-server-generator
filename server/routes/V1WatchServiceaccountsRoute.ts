// Path: routes/V1WatchServiceaccountsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1ServiceAccountListForAllNamespaces } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/serviceaccounts', watchCoreV1ServiceAccountListForAllNamespaces)

export default router;
