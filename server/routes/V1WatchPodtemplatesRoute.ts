// Path: routes/V1WatchPodtemplatesRoute.ts
// This file is auto-generated. Do not edit this file.
import { Router } from 'express';

import { watchCoreV1PodTemplateListForAllNamespaces } from '../controllers/CoreV1Controller'

import {router} from './router';

router.get('/api/v1/watch/podtemplates', watchCoreV1PodTemplateListForAllNamespaces)

export default router;
