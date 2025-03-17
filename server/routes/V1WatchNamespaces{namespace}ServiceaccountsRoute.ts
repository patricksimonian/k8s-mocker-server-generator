// Path: routes/V1WatchNamespaces{namespace}ServiceaccountsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1NamespacedServiceAccountList } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/namespaces/:namespace/serviceaccounts', watchCoreV1NamespacedServiceAccountList)

export default router;
