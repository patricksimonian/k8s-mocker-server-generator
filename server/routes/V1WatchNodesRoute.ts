// Path: routes/V1WatchNodesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1NodeList } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/nodes', watchCoreV1NodeList)

export default router;
