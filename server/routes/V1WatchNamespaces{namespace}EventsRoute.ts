// Path: routes/V1WatchNamespaces{namespace}EventsRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1NamespacedEventList } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/namespaces/:namespace/events', watchCoreV1NamespacedEventList)

export default router;
